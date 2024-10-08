"use client";
import { allPosts } from ".contentlayer/generated";
import PostList from "./components/ui/PostList";

import { useLang } from "@/components/LanguageProvider";
import { blogTranslations } from "@/translations/blogTranslations";

export default function Blog() {
  const { lang } = useLang();
  const text = blogTranslations[lang];
  const posts = allPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter((post) => post._id.includes(`/${lang.toLowerCase()}/`));

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            {posts.length} {text.subTitle}
          </p>
        </div>
      </div>
      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <PostList posts={posts} />
      </div>
      <div
        className="animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
      </div>
    </div>
  );
}
