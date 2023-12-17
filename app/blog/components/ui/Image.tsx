"use client";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "next-themes";

type CustomImageProps = {
  src: string | {[key: string]: string};
  width: number;
  height: number;
  alt: string;
  caption?: string;
  breakout?: boolean;
  rounded?: boolean;
  priority?: boolean;
  reset?: boolean;
};

export default function CustomImage({
  src,
  width,
  height,
  alt,
  caption,
  breakout,
  rounded,
  priority,
  reset,
}: CustomImageProps) {
  const { theme } = useTheme();
  let effectiveTheme = theme;
  if (theme === "system") {
    const prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    effectiveTheme = prefersDarkTheme ? "dark" : "light";
  }
  const imageUrl = typeof src === 'object' ? src[effectiveTheme as keyof typeof src] || src['default'] : src;
  return (
    <div
      className={clsx(
        reset ? "" : "not-prose w-full my-8 w-full",
        breakout ? "bg-tertiary" : "",
        (rounded || breakout) && "overflow-hidden rounded-md md:rounded-lg"
      )}
    >
      <figure 
        className={clsx("m-0 flex flex-col", breakout ? "gap-4" : "gap-2")}
      >
        <Image
          src={imageUrl}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          className={clsx(
            "h-auto w-full",
            breakout ? "bg-tertiary" : "",
            (rounded || breakout) && 
              "overflow-hidden rounded-md bg-tertiary md:rounded-lg"
          )}
        />
        {caption && (
          <figcaption
            className={clsx(
              "mx-auto my-2 max-w-md text-center text-xs font-medium leading-tight text-tertiary",
              breakout && "mx-auto w-full max-w-[700px] px-6 ",
            )}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
