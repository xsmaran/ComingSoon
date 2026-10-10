"use client";

import { useState } from "react";
import { contactInfo, contactReasons } from "@/lib/pages";
import { cn } from "@/lib/cn";

const field =
  "w-full rounded-[24px] bg-cream px-5 py-4 font-chiron text-[16px]/[20px] text-brown placeholder:text-brown/50 outline-none ring-brown transition-shadow focus:ring-[3px] md:text-[18px]/[22px]";
const label = "flex flex-col gap-2 font-autour text-[16px]/[20px] text-brown md:text-[18px]/[22px]";

/**
 * Contact form. There is no backend in this project, so submitting opens the visitor's
 * email app with the message pre-filled (to contactInfo.email). Swap `onSubmit` for a
 * form service or a Next.js route handler when you're ready.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const reason = String(data.get("reason"));
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      "",
      String(data.get("message")),
    ]
      .join("\n");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(`${reason} — from ${data.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center">
        <p className="font-autour text-[30px]/[42px] text-brown lg:text-[42px]/[58.8px]">Thanks for the buzz!</p>
        <p className="max-w-[420px] font-chiron text-[18px]/[25.2px] text-brown">
          Your email app should have opened with your message ready to send. We usually reply within a day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="cursor-pointer font-chiron text-[16px]/[19.2px] font-bold text-brown underline underline-offset-4"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
      <div className="grid w-full gap-5 md:grid-cols-2">
        <label className={label}>
          Your name
          <input required name="name" autoComplete="name" placeholder="Olivia Parker" className={field} />
        </label>
        <label className={label}>
          Email
          <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={field} />
        </label>
      </div>
      <div className="grid w-full gap-5">
        <label className={label}>
          What’s brewing?
          <select name="reason" defaultValue={contactReasons[0]} className={cn(field, "cursor-pointer appearance-none")}>
            {contactReasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={label}>
        Message
        <textarea required name="message" rows={5} placeholder="Tell us a little more…" className={cn(field, "resize-none")} />
      </label>
      <button
        type="submit"
        className="inset-border relative mt-2 inline-flex w-min cursor-pointer items-center justify-center self-center rounded-[100px] bg-orange px-8 py-4 font-chiron text-[18px]/[27px] font-bold whitespace-pre text-brown shadow-press transition-[transform,box-shadow] duration-200 ease-out [--border-color:var(--color-brown)] [--border-width:3px] hover:translate-y-[3px] hover:shadow-[0_5px_0_0_var(--color-brown)] active:translate-y-[8px] active:shadow-none md:self-start lg:text-[20px]/[30px]"
      >
        Send message
      </button>
    </form>
  );
}
