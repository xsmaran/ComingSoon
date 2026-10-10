import { Reveal } from "@/components/ui/reveal";

const promises = [
  { title: "All about beverages.", body: "Coffee, matcha, teas and coolers. Beverages are our entire menu, with something for every mood." },
  { title: "A quick stop. A great sip.", body: "Our compact outlets are made for grab-and-go pickup. Any seating is limited and temporary, for a brief stop before you head on." },
];

export function Testimonials() {
  return <section className="nookaa-testimonials">
    <div className="nookaa-testimonials__heading"><p className="section-eyebrow">THE NOOKAA PROMISE</p><h2>Made with care.<br /><span>Made to go.</span></h2></div>
    <div className="nookaa-testimonials__grid">{promises.map((promise, index) => <Reveal key={promise.title} y={35} delay={index * .12}>
      <article className="nookaa-testimonials__quote"><span className="nookaa-testimonials__mark" aria-hidden="true">✳</span><h3 className="font-autour text-2xl mb-5">{promise.title}</h3><p className="font-chiron text-lg leading-relaxed">{promise.body}</p></article>
    </Reveal>)}</div>
  </section>;
}
