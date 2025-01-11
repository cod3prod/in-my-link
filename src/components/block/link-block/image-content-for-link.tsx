"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PlacehorderForLink from "./placehorder-for-link";

export default function ImageContentForLink({ img_url }: { img_url?: string }) {
    const [isLoading, setIsLoading] = useState(true);
    return (
      <div className="relative aspect-video">
        <PlacehorderForLink isLoading={isLoading} img_url={img_url} />
        {img_url && (
          <Image
            className={twMerge(
              "object-cover h-full",
              isLoading ? "invisible" : "visible"
            )}
            src={img_url}
            fill
            alt="Image"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
    );
}