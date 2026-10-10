import { pageMetadata, siteUrl, organizationId, breadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/ui/structured-data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost, type Block } from "@/lib/blog";
import { AsteriskIcon } from "@/components/icons";
import { BlogCard, blogGridClass } from "@/components/ui/blog-card";
import { BlurIn } from "@/components/ui/blur-in";
import { FramedImage } from "@/components/ui/framed-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(decodeURIComponent((await params).slug));
  if (!post) return {};
  const base = pageMetadata(post.title.replace(/\.$/, ""), post.excerpt, `/blog/articles/${post.slug}`);
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.isoDate, authors: ["Nookaa"] } };
}

function BodyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="pt-4 font-autour text-[26px]/[36px] text-brown md:text-[30px]/[42px] lg:text-[32px]/[44.8px]">{block.text}</h2>
      );
    case "quote":
      return (
        <blockquote className="my-4 rounded-[36px] bg-orange p-[10px] md:rounded-[48px] md:p-3">
          <p className="inset-border inset-border-dashed relative rounded-[28px] px-6 py-6 text-center font-autour text-[20px]/[28px] text-cocoa [--border-color:var(--color-brown)] [--border-width:2px] md:rounded-[38px] md:px-10 md:py-8 md:text-[25px]/[34px]">
            “{block.text}”
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 font-chiron text-[18px]/[28px] text-brown md:text-[20px]/[32px]">
              <AsteriskIcon className="mt-[5px] aspect-[0.918919] w-[17px] shrink-0 text-orange md:mt-[7px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="font-chiron text-[18px]/[28px] text-brown md:text-[20px]/[32px]">{block.text}</p>;
  }
}

export default async function ArticlePage({ params }: Props) {
  const post = getPost(decodeURIComponent((await params).slug));
  if (!post) notFound();
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative flex w-full grow flex-col items-center overflow-clip bg-cream">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.isoDate, image: `${siteUrl}${post.image.src}`, mainEntityOfPage: `${siteUrl}/blog/articles/${post.slug}`, author: { "@type": "Organization", "@id": organizationId, name: "Nookaa" }, publisher: { "@id": organizationId }, inLanguage: "en-IN" }} />
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Brewlog", path: "/blog" }, { name: post.title, path: `/blog/articles/${post.slug}` }])} />
      <article className="flex w-full flex-col items-center px-5 pt-[130px] md:px-10 md:pt-[150px] lg:px-[50px] lg:pt-[200px]">
        <header className="flex w-full max-w-[800px] flex-col items-center gap-5 text-center">
          <Reveal onMount y={20}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-chiron text-[16px]/[19.2px] font-bold text-brown underline-offset-4 hover:underline"
            >
              <span aria-hidden>←</span> All stories
            </Link>
          </Reveal>
          <Reveal onMount y={20} delay={0.05} className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-[100px] bg-orange px-4 py-1.5 font-chiron text-[14px]/[16.8px] font-bold text-brown">{post.category}</span>
            <span className="font-chiron text-[14px]/[16.8px] font-medium text-ash">
              <time dateTime={post.isoDate}>{post.date}</time> · {post.readTime}
            </span>
          </Reveal>
          <BlurIn
            as="h1"
            onMount
            className="max-w-[300px] font-autour text-[36px]/[46px] text-brown whitespace-pre-wrap md:max-w-[600px] md:text-[42px]/[56px] lg:max-w-[760px] lg:text-[56px]/[72px]"
          >
            {post.title}
          </BlurIn>
          <Reveal onMount y={30} delay={0.1} className="max-w-[640px]">
            <p className="font-chiron text-[18px]/[25.2px] text-brown md:text-[20px]/[28px]">{post.excerpt}</p>
          </Reveal>
        </header>

        <Reveal onMount y={50} delay={0.2} className="mt-10 w-full max-w-[1000px] lg:mt-16">
          <FramedImage
            image={post.image}
            alt={post.imageAlt}
            sizes="(min-width: 1200px) 1000px, 100vw"
            frame="var(--color-orange)"
            priority
            objectPosition={post.imagePosition}
            className="aspect-[4/3] w-full rounded-[32px] md:aspect-[16/9] lg:rounded-[42px]"
          />
        </Reveal>

        <div className="mt-10 flex w-full max-w-[700px] flex-col gap-6 pb-[60px] md:mt-14 lg:mt-20 lg:pb-[100px]">
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}
        </div>
      </article>

      <section className="relative flex w-full flex-col items-center justify-center gap-[42px] bg-cream px-[30px] pb-[50px] md:gap-16 md:px-10 md:pb-[70px] lg:gap-[94px] lg:px-[50px] lg:pb-[100px]">
        <SectionHeading>More stories to sip on</SectionHeading>
        <div className={blogGridClass}>
          {more.map((p, i) => (
            <BlogCard key={p.slug} post={p} className={i === 2 ? "md:hidden lg:flex" : undefined} />
          ))}
        </div>
      </section>
    </main>
  );
}
