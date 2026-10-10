import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { peoplePhotos } from "@/lib/content";
import { aboutStory, aboutTicker, aboutValues, founder } from "@/lib/pages";
import { AsteriskIcon } from "@/components/icons";
import { Benefits } from "@/components/sections/benefits";
import { TickerBand } from "@/components/sections/ticker-band";
import { Testimonials } from "@/components/sections/testimonials";
import { BlurIn } from "@/components/ui/blur-in";
import { FramedImage } from "@/components/ui/framed-image";
import { Otter } from "@/components/ui/otter";
import { PageHeader } from "@/components/ui/page-header";
import { BrownPill, PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = pageMetadata('About Our Grab & Go Beverage Brand', 'Discover NOOKAA’s story: handcrafted coffees, milk teas, refreshers and matcha with premium ingredients and honest prices. Sip the Happiness.', '/about-us');

const sectionPad = "px-5 py-[50px] md:px-10 md:py-[70px] lg:px-[50px] lg:py-[100px]";
const sectionGap = "gap-[42px] md:gap-16 lg:gap-[94px]";

function Story() {
  return (
    <section className={`relative flex w-full flex-col items-center bg-brown ${sectionPad}`}>
      <div className="flex w-full max-w-[800px] flex-col items-center gap-16 md:max-w-[1000px] lg:max-w-[1200px] lg:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-px lg:flex-1 lg:items-start lg:text-left">
          <Reveal y={30} className="flex items-center gap-2 md:gap-3">
            {[0, 1, 2].map((i) => (
              <AsteriskIcon key={i} className="aspect-[0.918919] w-[21px] text-orange md:w-8" />
            ))}
          </Reveal>
          <BlurIn className="max-w-[560px] font-autour text-[30px]/[42px] text-cream whitespace-pre-wrap md:text-[32px]/[44.8px] lg:text-[42px]/[58.8px]">
            {aboutStory.title}
          </BlurIn>
          {aboutStory.paragraphs.map((p, i) => (
            <Reveal key={i} y={30} delay={0.1 * i} className="max-w-[560px]">
              <p className="font-chiron text-[16px]/[22.4px] text-cream whitespace-pre-wrap md:text-[20px]/[28px]">{p}</p>
            </Reveal>
          ))}
          <Reveal y={20}><p className="font-autour text-[20px]/[28px] text-orange">{aboutStory.signature}</p></Reveal>
        </div>

        <Reveal y={50} className="relative aspect-square w-full max-w-[350px] md:max-w-[520px] lg:w-px lg:flex-1">
          <FramedImage
            image={peoplePhotos[2].image}
            alt={peoplePhotos[2].alt}
            sizes="(min-width: 1200px) 420px, 75vw"
            frame="var(--color-orange)"
            className="absolute top-0 right-0 aspect-[4/3] w-[78%] rotate-6"
          />
          <FramedImage
            image={peoplePhotos[0].image}
            alt={peoplePhotos[0].alt}
            sizes="(min-width: 1200px) 420px, 75vw"
            className="absolute bottom-0 left-0 aspect-[4/3] w-[78%] -rotate-4"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className={`relative flex w-full flex-col items-center bg-cream ${sectionPad} ${sectionGap}`}>
      <SectionHeading>What goes into every happy sip.</SectionHeading>
      <div className="flex w-full max-w-[800px] flex-col gap-6 md:max-w-[750px] md:flex-row md:gap-4 lg:max-w-[1200px] lg:gap-6">
        {aboutValues.map((v, i) => (
          <Reveal key={v.title} y={50 + i * 20} className="relative w-full md:w-px md:flex-1">
            <article className="flex h-full w-full flex-col items-center gap-[16.2px] rounded-[32.4px] bg-paper p-[32.4px] text-center lg:gap-[25px] lg:rounded-[50px] lg:p-[50px]">
              <div className="relative flex h-[189px] w-full max-w-[300px] items-center justify-center rounded-[24px] bg-ivory lg:h-[260px]">
                <div className="relative h-[130px] w-[110px] lg:h-[170px] lg:w-[145px]">
                  {typeof v.art === "string" ? (
                    <Otter variant={v.art} className="size-full" />
                  ) : (
                    <Image src={v.art.src} alt="" fill sizes="145px" className="object-contain" />
                  )}
                </div>
              </div>
              <h3 className="font-autour text-[20px]/[24px] text-brown md:text-[18px]/[22px] lg:text-[25px]/[30px]">{v.title}</h3>
              <p className="max-w-[280px] font-chiron text-[16px]/[20.8px] text-brown lg:text-[20px]/[26px]">{v.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className={`relative flex w-full flex-col items-center bg-cream px-5 pb-[50px] md:px-10 md:pb-[70px] lg:px-[50px] lg:pb-[100px]`}>
      <Reveal y={50} className="w-full max-w-[800px] md:max-w-[1000px]">
        <div className="flex w-full items-center justify-center rounded-[45px] bg-orange p-[14.85px] md:rounded-[88px] md:p-[25px]">
          <div className="inset-border inset-border-dashed relative flex w-px flex-1 flex-col items-center gap-8 rounded-[31px] p-6 [--border-color:var(--color-brown)] [--border-width:1.98px] md:flex-row md:gap-12 md:rounded-[61px] md:p-10 md:[--border-width:3px] lg:p-[50px]">
            <div className="relative aspect-square w-[220px] shrink-0 overflow-hidden rounded-full bg-cream md:w-[260px] lg:w-[320px]">
              <div className="absolute inset-[10%_12%_4%]">
                <Otter variant="barista" label="Nookaa’s original otter mascot with sunglasses, a blue scarf, brown apron and an iced lemon drink." className="size-full" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              <h2 className="font-autour text-[30px]/[42px] text-brown md:text-[32px]/[44.8px] lg:text-[42px]/[58.8px]">{founder.heading}</h2>
              <p className="font-autour text-[20px]/[26px] text-cocoa lg:text-[25px]/[32.5px]">{founder.tagline}</p>
              {founder.paragraphs.map((paragraph) => <p key={paragraph} className="font-chiron text-[16px]/[22.4px] text-brown md:text-[18px]/[25.2px] lg:text-[20px]/[28px]">{paragraph}</p>)}
              <div className="pt-2">
                <p className="font-autour text-[20px]/[24px] text-espresso">{founder.name}</p>
                <p className="font-chiron text-[14px]/[16.8px] text-brown md:text-[16px]/[19.2px]">{founder.role}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-clip bg-cream">
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: 'About Our Grab & Go Beverage Brand', path: '/about-us' }])} />
      <PageHeader
        title="Great beverages for life on the go"
        subtitle="Handcrafted beverages, premium ingredients and honest prices. Sip. Chill. Repeat."
        below={
          <Reveal onMount y={50} delay={0.3} className="w-full max-w-[1200px]">
            <FramedImage
              image={peoplePhotos[1].image}
              alt={peoplePhotos[1].alt}
              sizes="(min-width: 1200px) 1200px, 100vw"
              frame="var(--color-orange)"
              priority
              className="aspect-[4/5] w-full rounded-[32px] md:aspect-[16/9] lg:aspect-[21/9] lg:rounded-[50px]"
            />
          </Reveal>
        }
      >
        <PillButton href="/menu" className="px-8 py-4 text-[18px]/[27px] lg:text-[20px]/[30px]">
          See the menu
        </PillButton>
        <BrownPill href="/contact-us">Buzz us</BrownPill>
      </PageHeader>

      <Story />
      <TickerBand items={aboutTicker} />
      <Values />
      <Founder />
      <Benefits title="Handcrafted. Grab & go." id="how-we-serve" />
      <Testimonials />
    </main>
  );
}
