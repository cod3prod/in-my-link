"use client";

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
  const { type, active } = block;
  const controls = useDragControls();

  return (
    <Reorder.Item
      as="li"
      value={block}
      dragListener={false}
      dragControls={controls}
      key={block.id}
      className={
        "relative flex-1 flex min-h-32 rounded-lg border border-gray-200 shadow-lg"
      }
    >
      <DragTab moveItem={moveItem} index={index} controls={controls} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BlockHeader type={type} active={active} blockId={block.id} />
        <BlockContent block={block} />
        <DeleteButton
          blockId={block.id}
          type={type}
          publicId={block.public_id || null}
        />
      </div>
    </Reorder.Item>
  );
}
