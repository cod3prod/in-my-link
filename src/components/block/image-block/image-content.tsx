"use client";

import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "./image-placeholder";

export default function ImageContent({ img_url }: { img_url: string | null}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="aspect-video p-2 bg-gray-100">
      <ImagePlaceholder isLoading={isLoading} img_url={img_url} />
      {img_url && (
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            className={twMerge(
              "object-contain",
              isLoading ? "invisible" : "visible"
            )}
            src={img_url}
            fill
            alt="Image"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
    </div>
  );
}
