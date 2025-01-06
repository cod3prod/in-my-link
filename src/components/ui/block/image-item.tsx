"use client";

import { FaSpinner } from "react-icons/fa";
import { CiImageOff } from "react-icons/ci";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ImagePlaceholder = ({ isLoading, img_url }: { isLoading: boolean; img_url?: string }) => (
  <>
    {!img_url && (
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 absolute top-0 left-0">
        <CiImageOff className="text-gray-500 text-7xl" />
        <p className="text-sm text-gray-600 mt-2">URL이 존재하지 않습니다</p>
      </div>
    )}
    {img_url && isLoading && (
      <div className="flex items-center justify-center w-full h-full bg-gray-200 absolute top-0 left-0">
        <FaSpinner className="text-gray-500 animate-spin text-4xl" />
      </div>
    )}
  </>
);

export default function ImageItem({
  img_url,
  src,
  title,
}: {
  img_url?: string;
  src?: string;
  title?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const content = (
    <div className="relative aspect-video">
      <ImagePlaceholder isLoading={isLoading} img_url={img_url} />
      {img_url && (
        <Image
          className={twMerge("aspect-video object-cover", isLoading ? "hidden" : "block")}
          src={img_url}
          fill
          alt="Image"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );

  return (
    <div className={twMerge("w-full rounded-lg overflow-hidden shadow-md bg-white", src ? "transform hover:scale-105 transition-all duration-300" : "")}>
      {src ? (
        <Link href={src} passHref>
          <div className={"cursor-pointer"}>{content}</div>
        </Link>
      ) : (
        content
      )}

      <p className="p-3 text-center text-gray-800">
        {title || "타이틀을 입력해주세요"}
      </p>
    </div>
  );
}
