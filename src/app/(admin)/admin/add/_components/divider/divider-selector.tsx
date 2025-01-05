"use client";

import DivideItem from "./divider-item";

export default function DividerSelector() {
  return (
    <>
      <p className="input-label">
        구분선 모양
        <span className="transform translate-x-1 translate-y-1 inline-block text-primary-300">
          *
        </span>
      </p>

      <div className="flex h-32 w-full gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <DivideItem key={i} index={i} />
        ))}
      </div>
    </>
  );
}
