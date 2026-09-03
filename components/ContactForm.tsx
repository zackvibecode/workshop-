"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SERVICE_OPTIONS, WA_NUMBER } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hi ZAQONE, new enquiry:",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Vehicle: ${form.brand} ${form.model}`.trim(),
      `Service: ${form.service}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-grey/60 outline-none transition-all focus:border-ink focus:ring-2 focus:ring-ink/10";

  return (
    <section id="contact" className="bg-soft py-20 md:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal variant="left">
            <p className="eyebrow eyebrow-accent">Contact</p>
            <h2 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
              TELL US ABOUT
              <br />
              YOUR VEHICLE
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-grey">
              Share your vehicle details and what you&apos;re planning.
              We&apos;ll continue the conversation with you on WhatsApp.
            </p>
          </Reveal>
        </div>

        <Reveal variant="right">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={form.name} onChange={set("name")} placeholder="Name" aria-label="Name" className={inputCls} />
              <input required value={form.phone} onChange={set("phone")} placeholder="Phone Number" aria-label="Phone Number" inputMode="tel" className={inputCls} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={form.brand} onChange={set("brand")} placeholder="Vehicle Brand (e.g. BMW)" aria-label="Vehicle Brand" className={inputCls} />
              <input required value={form.model} onChange={set("model")} placeholder="Vehicle Model (e.g. M4)" aria-label="Vehicle Model" className={inputCls} />
            </div>
            <select value={form.service} onChange={set("service")} aria-label="Service Interested" className={inputCls}>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <textarea
              value={form.message}
              onChange={set("message")}
              placeholder="Message — tell us what you have in mind"
              aria-label="Message"
              rows={5}
              className={`${inputCls} resize-none`}
            />
            <button type="submit" className="btn btn-dark w-full justify-center sm:w-auto">
              Continue on WhatsApp <span className="arr">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
