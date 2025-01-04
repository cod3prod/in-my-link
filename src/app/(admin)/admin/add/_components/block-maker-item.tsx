"use client";

import Image from "next/image";
import { blockData } from "@/data/block-maker";
import { useBlockForm } from "@/hooks/use-block-form";

export default function BlockMakerItem({
  icon,
  type,
  alt,
  bgColor,
  title,
  description,
}: (typeof blockData)[0]) {
  const { dispatch } = useBlockForm();
  return (
    <div
      className="px-1 py-2 flex items-center border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={() => dispatch({ type: "SET_FORM", payload: { type } })}
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="relative flex-shrink-0 flex h-14 w-14 p-2 items-center justify-center rounded-xl"
      >
        <Image
          src={icon}
          alt={alt}
          className="object-contain brightness-0 invert filter"
        />
      </div>
      <div className="ml-4">
        <p className="title">{title}</p>
        <p className="supplementary-info">{description}</p>
      </div>
    </div>
  );
}
