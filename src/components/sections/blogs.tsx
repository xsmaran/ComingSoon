import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { BlogCard, blogGridClass } from "@/components/ui/blog-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** Latest three Brewlog posts (the third is hidden on tablet, as in the original). */
export function Blogs({ title = "A little inspiration between sips." }: { title?: string }) {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[42px] bg-cream px-[30px] pt-20 pb-[50px] md:gap-16 md:px-10 md:py-[50px] lg:gap-[94px] lg:px-[50px] lg:py-[100px]">
      <SectionHeading>{title}</SectionHeading>

      <div className={blogGridClass}>
        {blogPosts.slice(0, 3).map((post, i) => (
          <BlogCard key={post.slug} post={post} className={i === 2 ? "md:hidden lg:flex" : undefined} />
        ))}
      </div>

      <Reveal y={30} className="relative">
        <Link
          href="/blog"
          className="flex w-min items-center justify-center rounded-[100px] bg-brown px-7 py-4 font-chiron text-[20px]/[24px] font-bold whitespace-pre text-white transition-opacity duration-200 hover:opacity-90"
        >
          All stories
        </Link>
      </Reveal>
    </section>
  );
}
