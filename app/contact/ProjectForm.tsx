"use client";

import { FormEvent, useState } from "react";
import { FirebaseError } from "firebase/app";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";

type SubmitState = "idle" | "submitting" | "success" | "error";

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

export default function ProjectForm({
  selectedType = "",
}: {
  selectedType?: string;
}) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function submitProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Quietly accept bot submissions without writing them to Firestore.
    if (value(data, "website")) {
      setSubmitState("success");
      setMessage("Thanks — your project requirements have been received.");
      return;
    }

    if (!isFirebaseConfigured) {
      setSubmitState("error");
      setMessage(
        "The enquiry service is not configured yet. Please call or email instead.",
      );
      return;
    }

    setSubmitState("submitting");
    setMessage("");
    setWhatsappUrl("");

    const payload = {
      clientName: value(data, "clientName"),
      projectName: value(data, "projectName"),
      branch: value(data, "branch"),
      phone: value(data, "phone"),
      email: value(data, "email").toLowerCase(),
      projectType: value(data, "projectType"),
      deadline: value(data, "deadline"),
      requirements: value(data, "requirements"),
      status: "new",
      source: "website-contact",
    };

    try {
      await addDoc(collection(getFirebaseDb(), "projectEnquiries"), {
        ...payload,
        createdAt: serverTimestamp(),
      });

      // Dispatch server-side phone notification trigger
      fetch("/api/notify-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.error("Notification trigger error:", err));

      // Build instant WhatsApp notification URL for owner number (+91 7083232813)
      const waMessage =
        `🚨 *NEW PROJECT ENQUIRY*\n` +
        `👤 *Name:* ${payload.clientName}\n` +
        `📞 *Phone:* ${payload.phone}\n` +
        `📧 *Email:* ${payload.email}\n` +
        `📌 *Project:* ${payload.projectName} (${payload.projectType})\n` +
        `🏢 *Branch/Company:* ${payload.branch}\n` +
        `📅 *Deadline:* ${payload.deadline || "Flexible"}\n` +
        `💬 *Requirements:* ${payload.requirements}`;

      const generatedWaUrl = `https://wa.me/917083232813?text=${encodeURIComponent(waMessage)}`;
      setWhatsappUrl(generatedWaUrl);

      form.reset();
      setSubmitState("success");
      setMessage(
        "Thanks! Your enquiry has been saved. You can also send it to Vivek using the WhatsApp button below.",
      );
    } catch (error) {
      setSubmitState("error");

      if (
        error instanceof FirebaseError &&
        error.code === "permission-denied"
      ) {
        setMessage(
          "The enquiry service is temporarily unavailable. Please call or email while access is restored.",
        );
        return;
      }

      setMessage(
        "Your enquiry could not be sent. Please try again or use the phone number above.",
      );
    }
  }

  const isSubmitting = submitState === "submitting";

  return (
    <section className="projectFormSection wrap" id="project-requirements">
      <div className="formIntro">
        <small>PROJECT REQUIREMENTS</small>
        <h2>
          Tell me what you want to <em>build.</em>
        </h2>
        <p>
          Share the essentials and I’ll reply with the best approach, timeline
          and quote.
        </p>
      </div>
      <form className="projectForm" onSubmit={submitProject}>
        <label>
          Your name <span>*</span>
          <input
            name="clientName"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Your full name"
          />
        </label>
        <label>
          Project name <span>*</span>
          <input
            name="projectName"
            required
            minLength={2}
            maxLength={150}
            placeholder="e.g. Smart Attendance System"
          />
        </label>
        <label>
          Branch / business <span>*</span>
          <input
            name="branch"
            required
            minLength={2}
            maxLength={120}
            placeholder="e.g. CSE, E&TC or company name"
          />
        </label>
        <label>
          Phone number <span>*</span>
          <input
            name="phone"
            required
            minLength={7}
            maxLength={20}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Your contact number"
          />
        </label>
        <label>
          Email <span>*</span>
          <input
            name="email"
            required
            maxLength={160}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label>
          Project type <span>*</span>
          <select name="projectType" required defaultValue={selectedType}>
            <option value="" disabled>
              Select a project type
            </option>
            <option>M.Tech Project</option>
            <option>B.E. Project</option>
            <option>Web Development</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Preferred deadline
          <input name="deadline" type="date" />
        </label>
        <label className="fullField">
          Project requirements <span>*</span>
          <textarea
            name="requirements"
            required
            minLength={10}
            maxLength={3000}
            rows={6}
            placeholder="Describe the main idea, required modules, technology preference and expected output."
          />
        </label>
        <label className="formHoneypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <div
          className="formSubmit fullField"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          <button className="btn" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending…" : "Send project requirements ↗"}
          </button>
          {submitState === "success" && whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "14px",
                background: "#25D366",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.25)",
              }}
            >
              💬 Send instant WhatsApp alert to Vivek (+91 7083232813) ↗
            </a>
          )}
          <p className={`formMessage ${submitState}`} aria-live="polite">
            {message}
          </p>
        </div>
      </form>
    </section>
  );
}
