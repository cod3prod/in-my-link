"use client";

import ImageContentForLink from "./image-content-for-link";

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

      <p className="p-3 text-center text-gray-800">
        {title || "타이틀을 입력해주세요"}
      </p>
    </div>
  );
}
