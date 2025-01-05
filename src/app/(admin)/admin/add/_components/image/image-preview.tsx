"use client";

import Image from "next/image";
import imageIcon from "@/assets/icons/icon_image.png";

export default function ImagePreview() {
  return (
    <div className="relative w-full">
      <Image
        src={imageIcon}
        alt="image"
        layout="responsive"
        className="brightness-0 filter"
      />
    </div>
  );
}
