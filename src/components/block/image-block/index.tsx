"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ImageContent from "./image-content";

export default function ImageBlock({
  img_url,
  url,
  title,
}: {
  img_url: string | null;
  url: string | null;
  title: string | null;
}) {

  return (
    <div
      className={twMerge(
        "relative w-full rounded-lg overflow-hidden shadow-lg bg-white",
        url ? "transform hover:scale-105 transition-all duration-150" : ""
      )}
    >
      {url ? (
        <Link href={url} passHref>
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
