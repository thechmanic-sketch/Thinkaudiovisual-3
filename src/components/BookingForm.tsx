"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full rounded-lg border border-[var(--border)] bg-bg px-3.5 py-3 text-sm text-text transition-colors focus:border-accent focus:outline-none focus:ring-4 focus:ring-[var(--accent-glow-soft)]";
const labelClass = "mb-2 block text-xs tracking-wide text-muted";

export default function BookingForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    venue: "",
    services: "",
    message: "",
  });

  function update<K extends keyof typeof values>(key: K, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "New booking enquiry — Think Audio Visual",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Event type: ${values.eventType}`,
      `Event date: ${values.eventDate}`,
      `Venue: ${values.venue}`,
      `Services needed: ${values.services}`,
      `Message: ${values.message}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/27834180085?text=${text}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-surface p-8 sm:p-11">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" className={fieldClass} required value={values.name} onChange={(e) => update("name", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" className={fieldClass} required value={values.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" className={fieldClass} value={values.email} onChange={(e) => update("email", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="eventType">Event Type</label>
          <input id="eventType" className={fieldClass} value={values.eventType} onChange={(e) => update("eventType", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="eventDate">Event Date</label>
          <input id="eventDate" type="date" className={fieldClass} value={values.eventDate} onChange={(e) => update("eventDate", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="venue">Venue</label>
          <input id="venue" className={fieldClass} value={values.venue} onChange={(e) => update("venue", e.target.value)} />
        </div>
      </div>
      <div className="mt-5">
        <label className={labelClass} htmlFor="services">Services Needed</label>
        <input id="services" className={fieldClass} placeholder="Sound, Lighting, Stage, AV…" value={values.services} onChange={(e) => update("services", e.target.value)} />
      </div>
      <div className="mt-5">
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea id="message" rows={4} className={`${fieldClass} resize-y`} value={values.message} onChange={(e) => update("message", e.target.value)} />
      </div>
      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#06110E] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-6px_var(--accent-glow)] sm:w-auto"
      >
        Send via WhatsApp
      </button>
      <p className="mt-4 text-xs text-muted">
        In line with POPIA, information is only used to respond to the enquiry.
      </p>
    </form>
  );
}
