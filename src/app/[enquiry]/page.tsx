import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { enquiries, getEnquiry } from "@/lib/enquiries";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/ui/structured-data";
import { PageHeader } from "@/components/ui/page-header";
import { Otter } from "@/components/ui/otter";
import { EnquiryForm } from "@/components/sections/enquiry-form";

type Props = { params: Promise<{ enquiry: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return enquiries.map(({ slug }) => ({ enquiry: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getEnquiry((await params).enquiry);
  return item ? pageMetadata(item.label, item.description, `/${item.slug}`) : { robots: { index: false } };
}
export default async function EnquiryPage({ params }: Props) {
  const item = getEnquiry((await params).enquiry);
  if (!item) notFound();
  return <main className="nookaa-enquiry">
    <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: item.label, path: `/${item.slug}` }])} />
    <PageHeader title={item.title} subtitle={item.intro} />
    <section className="nookaa-enquiry__layout" aria-label={`${item.label} enquiry`}>
      <aside className="nookaa-enquiry__aside"><div className="nookaa-enquiry__art"><Otter variant={item.otter} label={`Nookaa otter illustration for ${item.label.toLowerCase()}`} sizes="(max-width: 809px) 150px, 300px" /></div><p className="section-eyebrow">BEVERAGES &amp; BEYOND</p><h2>A little sip.<br />A new possibility.</h2><p>Beverages only. Grab &amp; go.<br />Let’s start a conversation.</p><nav aria-label="Other enquiries">{enquiries.map(link => <Link key={link.slug} href={`/${link.slug}`} aria-current={link.slug === item.slug ? "page" : undefined}>{link.label}<span aria-hidden="true">↗</span></Link>)}</nav></aside>
      <EnquiryForm enquiry={item} />
    </section>
  </main>;
}
