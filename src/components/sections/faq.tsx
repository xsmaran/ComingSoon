import { faqs } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** Native disclosures keep every answer in the HTML and work without JavaScript. */
export function Faq() {
  return <section className="nookaa-faq" id="frequently-asked-questions" aria-label="Frequently asked questions about Nookaa">
    <SectionHeading>A few things you might be wondering.</SectionHeading>
    <Reveal y={20} className="nookaa-faq__list">
      {faqs.map(({ q, a }) => <details key={q} className="nookaa-faq__item">
        <summary><span>{q}</span><span className="nookaa-faq__toggle" aria-hidden="true">+</span></summary>
        <div className="nookaa-faq__answer"><p>{a}</p></div>
      </details>)}
    </Reveal>
  </section>;
}
