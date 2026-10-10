import { ScrollText } from "@/components/ui/scroll-text";

export function Manifesto() {
  return <section className="nookaa-manifesto" aria-label="The Nookaa philosophy">
    <div className="nookaa-manifesto__meta"><span>01 / THE NOOKAA WAY</span><span aria-hidden="true">✳</span></div>
    <ScrollText text="Life moves fast. Take your favourite sip along. A morning ritual. An afternoon reset. Great beverages, made for wherever your day goes." />
    <div className="nookaa-manifesto__foot"><span>BEVERAGES &amp; BEYOND</span><span>Made for every you. ↗</span></div>
  </section>;
}
