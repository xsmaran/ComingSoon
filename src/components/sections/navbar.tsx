"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { enquiryLinks } from "@/lib/enquiries";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";
import { BrandLogo } from "@/components/ui/brand-logo";

function EnquiryDropdown({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const id = useId();
  const active = enquiryLinks.some(link => pathname === link.href);
  useEffect(() => {
    if (!open) return;
    const outside = (e: PointerEvent) => { if (e.target instanceof Node && !root.current?.contains(e.target)) setOpen(false); };
    const escape = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); button.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);
  return <div ref={root} className="nookaa-nav__enquiry" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
    <button ref={button} type="button" aria-expanded={open} aria-controls={id} className={`nookaa-nav__link nookaa-nav__enquiry-trigger ${active ? "is-active" : ""}`} onClick={() => setOpen(value => !value)} onKeyDown={e => { if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); requestAnimationFrame(() => root.current?.querySelector<HTMLAnchorElement>("a")?.focus()); } }}>Enquiry <span className={open ? "is-open" : ""} aria-hidden="true">⌄</span></button>
    <div id={id} className="nookaa-nav__dropdown" hidden={!open}>
      <p>LET’S TALK NOOKAA</p>
      {enquiryLinks.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
    </div>
  </div>;
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="nookaa-nav">
      <nav aria-label="Main" className="nookaa-nav__inner">
        <Link href="/" aria-label="Nookaa home" className="nookaa-nav__brand">
          <BrandLogo />
          <span className="nookaa-nav__tagline">A little sip of happy.</span>
        </Link>
        <div className="nookaa-nav__links">
          {navLinks.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} aria-current={active ? "page" : undefined}
              className={`nookaa-nav__link ${active ? "is-active" : ""}`}>{label}</Link>;
          })}
          <EnquiryDropdown key={pathname} pathname={pathname} />
        </div>
        <Link href="/menu" className="nookaa-nav__cta">Find your sip <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
