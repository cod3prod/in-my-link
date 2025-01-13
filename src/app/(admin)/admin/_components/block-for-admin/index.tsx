"use client";

import { twMerge } from "tailwind-merge";
import DragTab from "./drag-tab";
import BlockHeader from "./block-header";
import BlockContent from "./block-content";
import DeleteButton from "./delete-button";
import { Reorder, useDragControls } from "framer-motion";

export default function BlockForAdmin({
  block,
  index,
  moveItem,
}: {
  block: Block;
  index: number;
  moveItem: (index: number, direction: "UP" | "DOWN") => void;
}) {
  const { type } = block;
  const controls = useDragControls();

  return (
    <Reorder.Item
      as="li"
      value={block}
      dragListener={false}
      dragControls={controls}
      key={block.id}
      className={twMerge(
        "relative mb-3 flex min-h-32 rounded-lg border border-gray-200 bg-white shadow-lg",
        "overflow-hidden"
      )}
    >
      <DragTab moveItem={moveItem} index={index} controls={controls} />
      <div className="flex flex-col w-full">
        <BlockHeader type={type} />
        <BlockContent block={block} />
        <DeleteButton />
      </div>
    </Reorder.Item>
  );
}
