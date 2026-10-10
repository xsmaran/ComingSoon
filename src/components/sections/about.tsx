import { ScrollScene } from "@/components/ui/scroll-scene";
import { Otter } from "@/components/ui/otter";
import Link from "next/link";
import { BlurIn } from "@/components/ui/blur-in";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return <section className="nookaa-about">
    <div className="nookaa-about__inner">
      <ScrollScene travel={65} scaleFrom={.94} className="nookaa-about__photo-scene"><div className="nookaa-about__photo">
        <div className="nookaa-about__otter"><Otter variant="barista" sizes="(max-width: 809px) 75vw, 40vw" label="Nookaa otter preparing a beverage" /></div>
        <span className="nookaa-about__photo-note">Grab a sip. Get going.</span>
      </div></ScrollScene>
      <div className="nookaa-about__copy">
        <p className="nookaa-about__eyebrow">BEVERAGES &amp; BEYOND</p>
        <BlurIn className="nookaa-about__title">Great beverages.<br />Made to move.</BlurIn>
        <Reveal y={20}><p>We’re a grab-and-go brand serving beverages only. Stop by our counter for your morning ritual or afternoon reset, then take your favourite sip along. Any seating is small and temporary, for a brief stop.</p></Reveal>
        <Reveal y={20} delay={0.1}><Link href="/about-us" className="nookaa-about__link">Get to know Nookaa <span aria-hidden="true">↗</span></Link></Reveal>
        <div className="nookaa-about__signature" aria-hidden="true">✳ Made for every you.</div>
      </div>
    </div>
  </section>;
}
