"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ImageContent from "./image-content";

export default function ImageBlock({
  img_url,
  src,
  title,
}: {
  img_url?: string;
  src?: string;
  title?: string;
}) {

  return (
    <div
      className={twMerge(
        "w-full rounded-lg overflow-hidden shadow-lg bg-white",
        src ? "transform hover:scale-105 transition-all duration-150" : ""
      )}
    >
      {src ? (
        <Link href={src} passHref>
          <div className={"cursor-pointer"}>
            <ImageContent img_url={img_url} />
          </div>
        </Link>
      ) : (
        <ImageContent img_url={img_url} />
      )}

      <p className="p-3 text-center text-gray-800">
        {title || "타이틀을 입력해주세요"}
      </p>
    </div>
  );
}
