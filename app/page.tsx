import Image from "next/image";
import Link from "next/link";
import { allPosts } from ".contentlayer/generated";

import PostList from "./blog/components/ui/PostList";
import Stats from "@/components/Stats";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import profilePicture from "@/public/profile_picture.png";

export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    // 3 most recent
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8 animate-in">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Oscar Decloquemement
          </h1>
          <p
            className="text-secondary animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            J&apos;écris du code et j&apos;apprends.
          </p>
        </div>
        <div
          className="animate-in flex flex-col md:flex-row gap-6 text-secondary md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={profilePicture}
            width={85}
            height={85}
            alt="profilePicture"
            className="rounded-full bg-secondary"
          />
          <Stats />
        </div>
        <p
          className="text-primary max-w-lg animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Bonjour, je suis Oscar Decloquement, un développeur qui adore créer des projets.
          J&apos;essaie de me documenter au mieux sur les nouvelles technologies aussi bien professionellement que personnelement.
        </p>
        <ul
          className="flex flex-col md:flex-row gap-2 md:gap-6 text-secondary animated-list animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:contact@b-r.io"
              className="flex gap-2 items-center no-underline"
            >
              <ArrowUpRightIcon className="w-5 h-5" />
              <span>Envoyer un mail</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex gap-2 items-center no-underline"
            >
              <ArrowUpRightIcon className="w-5 h-5" />
              <span>Plus de contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className="text-secondary">Dernières publications</h2>
        <PostList posts={posts} />
        <Link href="/blog" className="underline dark:text-neutral-100">
          Tout voir
        </Link>
      </div>
    </div>
  );
}
