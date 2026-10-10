import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/content";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Footer() {
  return (
    <footer className="nookaa-footer">
      <div className="nookaa-footer__main">
        <div>
          <p className="nookaa-footer__eyebrow">YOUR NEXT HAPPY MOMENT</p>
          <h2>Great sips.<br /><span>Ready to go.</span></h2>
          <Link href="/menu" className="nookaa-footer__cta">Find your favourite beverage <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="nookaa-footer__brand">
          <Link href="/" aria-label="Nookaa home"><BrandLogo className="nookaa-logo--footer" /></Link>
          <p>Beverages only. A little joy to go.</p>
          <nav aria-label="Footer" className="nookaa-footer__links">
            {footerLinks.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
        </div>
        <Image src="/brand/official-otter.png" alt="" width={457} height={457} sizes="(max-width: 809px) 180px, 240px" className="nookaa-footer__otter" />
      </div>
      <div className="nookaa-footer__bottom">
        <p>© {new Date().getFullYear()} Nookaa. All rights reserved.</p>
        <nav aria-label="Legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><a href="https://nookaa.in/delete-account">Delete Account</a></nav>
        <span>Sip. Chill. Repeat.</span>
      </div>
    </footer>
  );
}
