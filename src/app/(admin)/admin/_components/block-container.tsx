"use client";

import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import BlockForAdmin from "./block-for-admin";
import AddButton from "./add-button";

export default function BlockContainer({blocks : data}: {blocks: Block[]}) {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    setBlocks(data)
  },[data])
  
  const moveItem = (index: number, direction: "UP" | "DOWN") => {
    const newBlocks = [...blocks];
    const targetIndex = direction === "UP" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;

    // Swap
    [newBlocks[index], newBlocks[targetIndex]] = [
      newBlocks[targetIndex],
      newBlocks[index],
    ];

    setBlocks(newBlocks);
  };

  return (
  <section className="relative container mx-auto max-w-3xl mb-20 p-4" >
    <Reorder.Group
      as="ul"
      axis="y"
      values={blocks}
      onReorder={setBlocks}
      className="flex-1 flex flex-col gap-4"
    >
      {blocks.map((block, index) => (
        <BlockForAdmin
          key={block.id}
          index={index}
          block={block}
          moveItem={moveItem}
        />
      ))}
    </Reorder.Group>
    <AddButton />
  </section>
);
}
