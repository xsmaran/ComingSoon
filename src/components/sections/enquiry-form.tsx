"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { enquiryEmail, type Enquiry, type EnquiryField } from "@/lib/enquiries";

function Field({ field, value, change }: { field: EnquiryField; value: string; change: (value: string) => void }) {
  const id = `enquiry-${field.name}`;
  const caption = <>{field.label}{field.required && <span aria-hidden="true"> *</span>}</>;
  if (field.type === "radio") return <fieldset className="nookaa-enquiry__field nookaa-enquiry__field--wide">
    <legend>{caption}</legend><div className="nookaa-enquiry__choices">{field.options?.map(option => <label key={option}>
      <input type="radio" name={field.name} value={option} checked={value === option} onChange={() => change(option)} required={field.required} /><span>{option}</span>
    </label>)}</div>
  </fieldset>;
  const props = { id, name: field.name, value, required: field.required, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => change(e.target.value) };
  return <div className={`nookaa-enquiry__field ${field.type === "textarea" ? "nookaa-enquiry__field--wide" : ""}`}>
    <label htmlFor={id}>{caption}{!field.required && <span className="nookaa-enquiry__optional"> (optional)</span>}</label>
    {field.type === "textarea" ? <textarea {...props} rows={4} maxLength={1200} /> : field.type === "select" ? <select {...props}><option value="">Choose an option</option>{field.options?.map(option => <option key={option}>{option}</option>)}</select> : <input {...props} type={field.type ?? "text"} autoComplete={field.autoComplete} min={field.min} max={field.name === "age" ? 120 : undefined} maxLength={field.type === "number" || field.type === "date" ? undefined : 300} placeholder={field.type === "url" ? "https://" : undefined} />}
  </div>;
}

export function EnquiryForm({ enquiry }: { enquiry: Enquiry }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const last = step === enquiry.steps.length - 1;
  const current = enquiry.steps[step];
  const draft = () => [
    `Nookaa — ${enquiry.label}`, "",
    ...enquiry.steps.flatMap(section => [section.title, ...section.fields.map(field => `${field.label}: ${values[field.name] || "Not provided"}`), ""]),
    "I agree to being contacted about this enquiry.",
  ].join("\n");
  const mailto = () => `mailto:${enquiryEmail}?subject=${encodeURIComponent(`${enquiry.label} — ${values.name || "Nookaa enquiry"}`)}&body=${encodeURIComponent(draft())}`;

  function move(next: number) {
    setStep(next);
    requestAnimationFrame(() => { heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ behavior: "instant", block: "start" }); });
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!last) { move(step + 1); return; }
    setPrepared(true);
  }
  function download() {
    const url = URL.createObjectURL(new Blob([draft()], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = `nookaa-${enquiry.slug}.txt`; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  if (prepared) return <div className="nookaa-enquiry__ready" role="status">
    <span aria-hidden="true">✳</span><h2>Your enquiry is ready.</h2>
    <p>Open your draft below to email <strong>{enquiryEmail}</strong>. Review and send it to complete your enquiry.</p>
    <a className="editorial-button" href={mailto()}>Open email draft ↗</a>
    <button type="button" onClick={download} className="nookaa-enquiry__text-button">Download a copy</button>
    <button type="button" onClick={() => setPrepared(false)} className="nookaa-enquiry__text-button">Edit enquiry</button>
  </div>;
  return <form className="nookaa-enquiry__form" onSubmit={submit}>
    {enquiry.steps.length > 1 && <ol className="nookaa-enquiry__progress" aria-label="Application progress">{enquiry.steps.map((section, index) => <li key={section.title} aria-current={index === step ? "step" : undefined} className={index <= step ? "is-complete" : ""}><span>{String(index + 1).padStart(2, "0")}</span><small>{section.title}</small></li>)}</ol>}
    <div className="nookaa-enquiry__form-heading"><p className="section-eyebrow">{enquiry.steps.length > 1 ? `STEP ${step + 1} OF ${enquiry.steps.length}` : "LET’S START HERE"}</p><h2 ref={heading} tabIndex={-1}>{current.title}</h2><p>Fields marked * are required.</p></div>
    <div className="nookaa-enquiry__fields">{current.fields.map(field => <Field key={field.name} field={field} value={values[field.name] ?? ""} change={value => setValues(previous => ({ ...previous, [field.name]: value }))} />)}</div>
    {last && <label className="nookaa-enquiry__consent"><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} /><span>I agree that Nookaa may contact me about this enquiry. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</span></label>}
    <div className="nookaa-enquiry__actions">{step > 0 && <button type="button" onClick={() => move(step - 1)} className="nookaa-enquiry__text-button">← Previous step</button>}<button type="submit" className="editorial-button">{last ? "Prepare enquiry email ↗" : "Next step →"}</button></div>
    {last && <p className="nookaa-enquiry__delivery">Prepare your enquiry, then review and send the draft to {enquiryEmail} in your email app.</p>}
  </form>;
}
