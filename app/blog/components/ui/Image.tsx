import Image from "next/image";
import clsx from "clsx";

import { useLang } from "@/components/LanguageProvider";

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: {[key: string]: string};
  breakout?: boolean;
  rounded?: boolean;
  priority?: boolean;
  reset?: boolean;
  lang: string;
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
  const { lang } = useLang();
  const translatedCaption = caption ? caption[lang] : null;
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
          src={src}
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
        {translatedCaption && (
          <figcaption
            className={clsx(
              "mx-auto my-2 max-w-md text-center text-xs font-medium leading-tight text-tertiary",
              breakout && "mx-auto w-full max-w-[700px] px-6 ",
            )}
          >
            {translatedCaption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
