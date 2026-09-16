import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { success: false, error: "Invalid enquiry" },
      { status: 400 },
    );
  }
  const fields = body as Record<string, unknown>;
  const limits: Record<string, [number, number]> = {
    clientName: [2, 100],
    projectName: [2, 150],
    branch: [2, 120],
    phone: [7, 20],
    email: [3, 160],
    projectType: [1, 40],
    deadline: [0, 10],
    requirements: [10, 3000],
  };
  const payload: Record<string, string> = {};
  for (const [key, [min, max]] of Object.entries(limits)) {
    const field = fields[key];
    if (
      typeof field !== "string" ||
      field.trim().length < min ||
      field.length > max
    ) {
      return NextResponse.json(
        { success: false, error: `Invalid ${key}` },
        { status: 400 },
      );
    }
    payload[key] = field.trim();
  }
  if (
    !["M.Tech Project", "B.E. Project", "Web Development", "Other"].includes(
      payload.projectType,
    )
  ) {
    return NextResponse.json(
      { success: false, error: "Invalid project type" },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.SMS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { success: false, error: "Notifications are not configured" },
      { status: 503 },
    );
  }

  try {
    const {
      clientName,
      projectName,
      branch,
      phone,
      email,
      projectType,
      deadline,
      requirements,
    } = payload;

    const targetPhone = process.env.NOTIFICATION_PHONE || "+917083232813";

    const notificationMessage = `🚨 NEW WEBSITE ENQUIRY 🚨
Name: ${clientName}
Phone: ${phone}
Email: ${email}
Project: ${projectName} (${projectType})
Branch/Org: ${branch}
Deadline: ${deadline || "Not specified"}
Requirements: ${requirements}`;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: targetPhone,
        message: notificationMessage,
        data: payload,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Notification provider rejected the request" },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      notifiedNumber: targetPhone,
      message: "Enquiry notification accepted by the provider.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to send enquiry notification" },
      { status: 502 },
    );
  }
}
