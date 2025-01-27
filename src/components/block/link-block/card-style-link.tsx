"use client";

import ImageContentForLink from "./image-content-for-link";
import { FaLink } from "react-icons/fa";

export default function ImageBlock({
  img_url,
  title,
}: {
  img_url?: string;
  title?: string;
}) {
  return (
    <div className={"w-full rounded-lg overflow-hidden shadow-lg bg-white"}>
      <ImageContentForLink img_url={img_url} />

      <p className="p-3 text-center text-gray-800 hover:text-blue-300 transition-colors duration-300">
        {title || "타이틀을 입력해주세요"}
        <FaLink className="inline ml-2" />
      </p>
    </div>
  );
}
