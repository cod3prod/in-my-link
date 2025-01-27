"use client";

import Link from "next/link";
import ImageContent from "./image-content";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaLink } from "react-icons/fa";

export default function ImageBlock({
  img_url,
  url,
  title,
}: {
  img_url: string | null;
  url: string | null;
  title: string | null;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-full rounded-lg overflow-hidden shadow-lg bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContent img_url={img_url} />
      <div
        className={twMerge(
          "absolute inset-0 flex justify-center items-end bg-gradient-to-b from-black/10 to-black/60 transition-all duration-500 ease-in-out",
          isHovered ? "translate-y-0" : "translate-y-4/5"
        )}
      >
        {url ? (
          <Link
            href={url}
            className="w-full text-center font-semibold text-xl text-white"
          >
            <p className="mb-10 w-full text-center font-semibold text-xl text-white hover:text-blue-300 transition-colors duration-300">
              {title || "타이틀을 입력해주세요"}
              <FaLink className="inline ml-2 text-lg" />
            </p>
          </Link>
        ) : (
          <p className="mb-10 w-full text-center font-semibold text-xl text-white">
            {title || "타이틀을 입력해주세요"}
          </p>
        )}
      </div>
    </div>
  );
}
