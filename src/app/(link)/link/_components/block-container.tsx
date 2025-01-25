"use client";

import Block from "@/components/block";
import Placeholder from "./placeholder";

export default function BlockContainer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="container mx-auto max-w-3xl p-4 flex flex-col gap-4">
      {blocks.length === 0 && <Placeholder />}
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
}
