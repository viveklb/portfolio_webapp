"use client";

import { FormEvent, useState } from "react";

export default function ProjectForm({ selectedType = "" }: { selectedType?: string }) {
  const [sent, setSent] = useState(false);
  function submitProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Project name: ${data.get("projectName")}`, `Name: ${data.get("clientName")}`,
      `Branch / business: ${data.get("branch")}`, `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`, `Project type: ${data.get("projectType")}`,
      `Deadline: ${data.get("deadline") || "Not specified"}`, "", "Requirements:", String(data.get("requirements")),
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:bharamshettivivek71@gmail.com?subject=${encodeURIComponent(`Project enquiry: ${data.get("projectName")}`)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <section className="projectFormSection wrap" id="project-requirements">
      <div className="formIntro"><small>PROJECT REQUIREMENTS</small><h2>Tell me what you want to <em>build.</em></h2><p>Share the essentials and I’ll reply with the best approach, timeline and quote.</p></div>
      <form className="projectForm" onSubmit={submitProject}>
        <label>Your name <span>*</span><input name="clientName" required autoComplete="name" placeholder="Your full name" /></label>
        <label>Project name <span>*</span><input name="projectName" required placeholder="e.g. Smart Attendance System" /></label>
        <label>Branch / business <span>*</span><input name="branch" required placeholder="e.g. CSE, E&TC or company name" /></label>
        <label>Phone number <span>*</span><input name="phone" required type="tel" autoComplete="tel" inputMode="tel" placeholder="Your contact number" /></label>
        <label>Email <span>*</span><input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label>Project type <span>*</span><select name="projectType" required defaultValue={selectedType}><option value="" disabled>Select a project type</option><option>M.Tech Project</option><option>B.E. Project</option><option>Web Development</option><option>Other</option></select></label>
        <label>Preferred deadline<input name="deadline" type="date" /></label>
        <label className="fullField">Project requirements <span>*</span><textarea name="requirements" required rows={6} placeholder="Describe the main idea, required modules, technology preference and expected output." /></label>
        <div className="formSubmit fullField"><button className="btn" type="submit">Send project requirements ↗</button>{sent ? <small>Your email app is opening with the details filled in.</small> : null}</div>
      </form>
    </section>
  );
}
