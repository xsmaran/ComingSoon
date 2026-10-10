"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { BlogCard, blogGridClass } from "@/components/ui/blog-card";
import { cn } from "@/lib/cn";

const categories = ["All", "Brewing", "Beverages", "Guides", "Community"] as const;

/** Category chips + responsive grid of Brewlog cards. */
export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="flex w-full flex-col items-center gap-10 lg:gap-16">
      <div role="tablist" aria-label="Filter stories" className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "cursor-pointer rounded-[100px] px-5 py-2.5 font-chiron text-[16px]/[19.2px] font-bold transition-colors duration-200",
              active === c ? "bg-brown text-white" : "bg-paper text-brown hover:bg-orange",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className={blogGridClass}>
          {shown.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="font-chiron text-[18px]/[25.2px] text-brown">No stories here yet. Check back soon!</p>
      )}
    </div>
  );
}
