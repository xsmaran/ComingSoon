import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { contactInfo } from "@/lib/pages";
import { ChatIcon, CupIcon, HomeIcon } from "@/components/icons";
import { Otter } from "@/components/ui/otter";
import { ContactForm } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";

import { PageHeader } from "@/components/ui/page-header";
import { BrownPill, PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = pageMetadata('Contact Nookaa', 'Contact Nookaa about beverages, app rewards, subscriptions and feedback. We are a grab-and-go beverage brand with counter pickup.', '/contact-us');

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address.join(", "))}`;

function InfoBlock({ icon: Icon, title, children }: { icon: typeof HomeIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream">
        <Icon className="size-6 text-brown" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h2 className="font-autour text-[20px]/[24px] text-orange lg:text-[25px]/[30px]">{title}</h2>
        <div className="font-chiron text-[16px]/[22.4px] text-cream md:text-[18px]/[25.2px]">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-clip bg-cream">
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: 'Contact Nookaa', path: '/contact-us' }])} />
      <PageHeader
        title="Come say hi, or buzz us anytime"
        subtitle="Beverage questions, app queries, feedback or just a hello. We read every single message."
      />

      <section className="relative flex w-full flex-col items-center px-5 pb-[50px] md:px-10 md:pb-[70px] lg:px-[50px] lg:pb-[100px]">
        <div className="grid w-full max-w-[800px] gap-6 md:max-w-[1000px] lg:max-w-[1200px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal y={50} className="h-full">
            <div className="flex h-full flex-col gap-8 rounded-[32.4px] bg-brown p-8 lg:rounded-[50px] lg:p-[50px]">
              <InfoBlock icon={HomeIcon} title="Visit us">
                {contactInfo.address.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </InfoBlock>
              <InfoBlock icon={CupIcon} title="Opening hours">
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 whitespace-nowrap md:gap-x-6">
                  {contactInfo.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt>{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </InfoBlock>
              <InfoBlock icon={ChatIcon} title="Talk to us">
                <p>
                  <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="hover:text-orange">
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-orange">
                    {contactInfo.email}
                  </a>
                </p>
              </InfoBlock>
            </div>
          </Reveal>

          <Reveal y={70} className="h-full">
            <div className="h-full rounded-[32.4px] bg-paper p-6 md:p-8 lg:rounded-[50px] lg:p-[50px]">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Directions (linked from the footer “Get Direction” button) */}
      <section
        id="direction"
        className="relative flex w-full scroll-mt-10 flex-col items-center gap-[42px] px-5 pb-[50px] md:gap-16 md:px-10 md:pb-[70px] lg:gap-[94px] lg:px-[50px] lg:pb-[100px]"
      >
        <SectionHeading>Find your way to nookaa</SectionHeading>
        <Reveal y={50} className="w-full max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px]">
          <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden rounded-[45px] md:h-[520px] md:rounded-[64px]">
            <div aria-hidden="true" className="absolute inset-0 nookaa-contact-pattern" />
            <div className="relative z-[1] flex flex-col items-center gap-6 px-6">
              {/* Map pin: the nookaa badge from the intro */}
              <div className="relative flex size-[120px] items-center justify-center rounded-full bg-brown shadow-press-cream">
                <Otter variant="smile" className="size-[95px]" />
                <span className="inset-border absolute top-1/2 left-1/2 size-[100px] -translate-1/2 rounded-full [--border-color:var(--color-cream)] [--border-width:4px]" />
              </div>
              <div className="flex flex-col items-center gap-4 rounded-[36px] bg-cream px-8 py-6 text-center">
                <p className="font-autour text-[20px]/[26px] text-brown lg:text-[25px]/[32.5px]">{contactInfo.address.join(", ")}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <PillButton href={mapsUrl} className="px-6 py-3 text-[16px]/[24px] lg:text-[18px]/[27px]">
                    Get directions
                  </PillButton>
                  <BrownPill href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="px-6 py-3 text-[16px]/[24px]">
                    Call us
                  </BrownPill>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Faq />
    </main>
  );
}
