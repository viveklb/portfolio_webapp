import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = ts.transpileModule(
  fs.readFileSync("app/api/notify-enquiry/route.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
const valid = {
  clientName: "Test User",
  projectName: "Test Project",
  branch: "Software",
  phone: "0000000000",
  email: "test@example.com",
  projectType: "Web Development",
  deadline: "",
  requirements: "A test enquiry that is never sent to a provider.",
};

function handler(
  env = {},
  fetch = () => {
    throw new Error("Unexpected network call");
  },
) {
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    process: { env },
    fetch,
    AbortSignal,
    require: (name) => {
      assert.equal(name, "next/server");
      return {
        NextResponse: { json: (body, init) => Response.json(body, init) },
      };
    },
  });
  return (body) =>
    exports.POST(
      new Request("http://localhost/api/notify-enquiry", {
        method: "POST",
        body: typeof body === "string" ? body : JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }),
    );
}

test("invalid JSON, shape, fields and unsupported project types return 400", async () => {
  for (const body of [
    "{",
    null,
    [],
    {},
    { ...valid, clientName: 12 },
    { ...valid, requirements: "x" },
    { ...valid, requirements: "x".repeat(3001) },
    { ...valid, projectType: "unknown" },
  ]) {
    assert.equal((await handler()(body)).status, 400);
  }
});

test("missing provider cannot report successful delivery", async () => {
  const response = await handler()(valid);
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});

test("provider rejection and network failure return 502", async () => {
  for (const fetch of [
    async () => new Response(null, { status: 500 }),
    async () => {
      throw new Error("Timeout");
    },
  ]) {
    const response = await handler(
      { SMS_WEBHOOK_URL: "https://example.invalid" },
      fetch,
    )(valid);
    assert.equal(response.status, 502);
    assert.equal((await response.json()).success, false);
  }
});

test("accepted provider requests use validated fields and a timeout", async () => {
  const response = await handler(
    { SMS_WEBHOOK_URL: "https://example.invalid" },
    async (url, init) => {
      assert.equal(url, "https://example.invalid");
      assert.ok(init.signal instanceof AbortSignal);
      assert.equal(init.method, "POST");
      assert.deepEqual(JSON.parse(init.body).data, valid);
      return new Response(null, { status: 202 });
    },
  )({ ...valid, injected: "must not be forwarded" });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
});
