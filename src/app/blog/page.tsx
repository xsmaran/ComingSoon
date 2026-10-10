import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Ribbons } from "@/components/sections/ticker-band";
import { BlogExplorer } from "@/components/sections/blog-explorer";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata = pageMetadata('Brewlog: Beverage Guides & Stories', 'Explore Nookaa’s beverage guides, coffee tips, matcha inspiration and grab-and-go rituals. Find your next favourite sip.', '/blog');

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <main className="relative flex w-full grow flex-col items-center overflow-clip bg-cream">
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: 'Brewlog: Beverage Guides & Stories', path: '/blog' }])} />
      <PageHeader title="The Brewlog" subtitle="Stories, tips and little rituals from behind the counter." />

      {/* Featured story */}
      <section className="relative flex w-full flex-col items-center px-[30px] md:px-10 lg:px-[50px]">
        <Reveal y={50} className="w-full max-w-[800px] md:max-w-[750px] lg:max-w-[1200px]">
          <Link
            href={`/blog/articles/${featured.slug}`}
            className="group flex w-full flex-col overflow-hidden rounded-[38.48px] bg-white p-3 lg:flex-row lg:items-center lg:gap-12 lg:rounded-[42px] lg:p-4"
          >
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[32px] lg:w-[58%]">
              <Image
                src={featured.image.src}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(min-width: 1200px) 680px, 100vw"
                className="object-contain bg-cream p-8 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={featured.imagePosition ? { objectPosition: featured.imagePosition } : undefined}
              />
            </div>
            <div className="flex flex-col items-center gap-5 px-3 pt-6 pb-6 text-center lg:items-start lg:px-0 lg:py-0 lg:pr-10 lg:text-left">
              <span className="rounded-[100px] bg-orange px-4 py-1.5 font-chiron text-[14px]/[16.8px] font-bold text-brown">
                Featured · {featured.category}
              </span>
              <h2 className="font-autour text-[26px]/[34px] text-brown lg:text-[42px]/[54px]">{featured.title}</h2>
              <p className="font-chiron text-[16px]/[22.4px] text-brown lg:text-[20px]/[28px]">{featured.excerpt}</p>
              <p className="font-chiron text-[14px]/[16.8px] font-medium text-ash">
                {featured.date} · {featured.readTime}
              </p>
              <span className="inset-border relative inline-flex w-min items-center justify-center rounded-[100px] bg-orange px-8 py-3 font-chiron text-[18px]/[21.6px] font-bold whitespace-pre text-brown shadow-press transition-[transform,box-shadow] duration-200 ease-out [--border-color:var(--color-brown)] [--border-width:3px] group-hover:translate-y-[3px] group-hover:shadow-[0_5px_0_0_var(--color-brown)]">
                Read story
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="relative flex w-full flex-col items-center px-[30px] pt-[60px] pb-[50px] md:px-10 md:pt-[80px] md:pb-[70px] lg:px-[50px] lg:pt-[100px] lg:pb-[100px]">
        <BlogExplorer posts={rest} />
      </section>

      <Ribbons />
    </main>
  );
}
