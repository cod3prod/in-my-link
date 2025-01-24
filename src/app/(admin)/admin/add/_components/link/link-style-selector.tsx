"use client";

import LinkStyleItem from "./link-style-item";

export default function LinkStyleSelctor() {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <p className="input-label">
        스타일
        <span className="transform translate-x-1 translate-y-1 inline-block text-primary-300">
          *
        </span>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <LinkStyleItem key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
