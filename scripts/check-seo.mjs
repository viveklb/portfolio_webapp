import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL || "http://localhost:3100";
const canonical = "https://viveksoftwares.online";
const profiles = [
  "vivek-bharamshetti",
  "vaishnavi-yelapure",
  "aditya-rachatte",
];
const pages = [
  "/",
  "/about",
  "/work",
  "/services",
  "/contact",
  ...profiles.map((slug) => `/team/${slug}`),
];
for (const path of pages) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(
    html.includes(
      `<link rel="canonical" href="${canonical}${path === "/" ? "" : path}"`,
    ) || html.includes(`<link rel="canonical" href="${canonical}${path}"`),
    `canonical: ${path}`,
  );
  assert.ok(!html.includes("xbear.online"), `old domain: ${path}`);
  assert.ok(!html.includes("Vaishanvi"), `misspelling: ${path}`);
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].map((match) => JSON.parse(match[1]));
  const graph = schemas.find((schema) => schema["@graph"])["@graph"];
  assert.equal(
    graph.filter((entity) => entity["@type"] === "Person").length,
    3,
  );
  assert.equal(
    graph.find((entity) => entity["@type"] === "WebSite").url,
    canonical,
  );
  if (path.startsWith("/team/")) {
    assert.equal(
      schemas.find((schema) => schema["@type"] === "ProfilePage").url,
      `${canonical}${path}`,
    );
  }
}
const redirect = await fetch(`${base}/dashboard`, { redirect: "manual" });
assert.equal(redirect.status, 308);
assert.equal(new URL(redirect.headers.get("location"), base).pathname, "/");
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
for (const path of pages)
  assert.ok(
    sitemap.includes(`<loc>${canonical}${path}</loc>`),
    `sitemap: ${path}`,
  );
assert.ok(!sitemap.includes("/dashboard") && !sitemap.includes("/login"));
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(robots.includes(`Sitemap: ${canonical}/sitemap.xml`));
assert.ok(!robots.includes("Disallow: /login"));
const login = await (await fetch(`${base}/login`)).text();
assert.match(login, /name="robots" content="[^"]*noindex/);
assert.equal((await fetch(`${base}/team/unknown-person`)).status, 404);
const image = await fetch(`${base}/opengraph-image`);
assert.equal(image.status, 200);
assert.ok(image.headers.get("content-type").includes("image/png"));
console.log(
  `SEO smoke checks passed for ${pages.length} public pages, redirect, 404, sitemap, robots, login and social image.`,
);
