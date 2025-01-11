"use client";

import { FaSpinner } from "react-icons/fa";
import { CiVideoOff } from "react-icons/ci";
import { useState } from "react";

export default function VideoBlock({ url }: { url?: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="aspect-video w-full rounded-lg relative">
      {!url && (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 absolute top-0 left-0 rounded-lg">
          <CiVideoOff className="text-gray-500 text-7xl animate-ping" />
          <p>URL이 존재하지 않습니다</p>
        </div>
      )}

      {url && isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 absolute top-0 left-0 rounded-lg">
          <FaSpinner className="text-gray-500 animate-spin text-4xl" />
        </div>
      )}
      {url && (
        <iframe
          className={`aspect-video w-full rounded-lg ${
            isLoading ? "invisible" : "visible"
          }`}
          src={url}
          title="video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        ></iframe>
      )}
    </section>
  );
}
