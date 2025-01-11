"use client";

import { twMerge } from "tailwind-merge";
import ImageContentForLink from "./image-content-for-link";

export default function ImageBlock({
  img_url,
  title,
}: {
  img_url?: string;
  title?: string;
}) {
  return (
    <div
      className={twMerge(
        "w-full rounded-lg overflow-hidden shadow-lg bg-white",
        "transform hover:scale-105 transition-all duration-150"
      )}
    >
      <ImageContentForLink img_url={img_url} />

      <p className="p-3 text-center text-gray-800">
        {title || "타이틀을 입력해주세요"}
      </p>
    </div>
  );
}
