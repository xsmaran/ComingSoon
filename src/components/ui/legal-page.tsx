import Link from "next/link";
import legal from "@/lib/legal.json";

export function LegalPage({ document }: { document: keyof typeof legal }) {
  return <main className="nookaa-legal">
    <div className="nookaa-legal__breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Legal</span></div>
    {/* Checked-in, tag-whitelisted official content. No live HTML or user input. */}
    <article className="legal__card" dangerouslySetInnerHTML={{ __html: legal[document] }} />
    <nav className="nookaa-legal__related" aria-label="Legal documents">
      <Link href="/privacy-policy">Privacy Policy ↗</Link><Link href="/terms">Terms &amp; Conditions ↗</Link>
    </nav>
  </main>;
}
