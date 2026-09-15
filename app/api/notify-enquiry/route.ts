import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, projectName, branch, phone, email, projectType, deadline, requirements } = body;

    const targetPhone = process.env.NOTIFICATION_PHONE || "+917083232813";

    const notificationMessage = `🚨 NEW WEBSITE ENQUIRY 🚨
Name: ${clientName}
Phone: ${phone}
Email: ${email}
Project: ${projectName} (${projectType})
Branch/Org: ${branch}
Deadline: ${deadline || "Not specified"}
Requirements: ${requirements}`;

    console.log(`[ENQUIRY NOTIFICATION] Alerting target number ${targetPhone}:\n${notificationMessage}`);

    // If an external SMS / WhatsApp webhook or Twilio credentials are configured, execute the call
    if (process.env.SMS_WEBHOOK_URL) {
      await fetch(process.env.SMS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: targetPhone,
          message: notificationMessage,
          data: body,
        }),
      }).catch((err) => console.error("Webhook notification error:", err));
    }

    return NextResponse.json({
      success: true,
      notifiedNumber: targetPhone,
      message: "Enquiry notification dispatched successfully.",
    });
  } catch (error) {
    console.error("Error sending enquiry notification:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send enquiry notification" },
      { status: 500 }
    );
  }
}
