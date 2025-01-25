"use client";

import { Reorder } from "framer-motion";
import BlockForAdmin from "./block-for-admin";
import AddButton from "./add-button";
import { useBlockStore } from "@/zustand/block-store";
import { supabase } from "@/libs/supabase-client";
import Placeholder from "./placeholder";

export default function BlockContainer() {
  const {blocks, setBlocks} = useBlockStore();

  const moveItem = async (index: number, direction: "UP" | "DOWN") => {
    const newBlocks = [...blocks];
    const targetIndex = direction === "UP" ? index - 1 : index + 1;
  
    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;
  
    // Swap
    [newBlocks[index], newBlocks[targetIndex]] = [
      newBlocks[targetIndex],
      newBlocks[index],
    ];
  
    setBlocks(newBlocks);

    try {
      const currentBlock = newBlocks[index];
      const targetBlock = newBlocks[targetIndex];
  
      const { error } = await supabase
        .from("blocks")
        .update({ sequence: targetBlock.sequence })
        .eq("id", currentBlock.id);
  
      if (error) throw error;
  
      const { error: targetError } = await supabase
        .from("blocks")
        .update({ sequence: currentBlock.sequence })
        .eq("id", targetBlock.id);
  
      if (targetError) throw targetError;
    } catch (error) {
      console.error("Error updating sequence in Supabase:", error);
    }
  };
  
  const handleReorder = async (newOrder: Block[]) => {
    try {
      const promises = newOrder.map((block, index) => {
        return supabase
          .from("blocks")
          .update({ sequence: index+1 })
          .eq("id", block.id);
      });
      await Promise.all(promises);
    } catch (error) {
      console.error(error);
    }       
    setBlocks(newOrder);
  }
  
  return (
  <section className="relative container mx-auto max-w-3xl mb-20 p-4" >
    {blocks.length === 0 && <Placeholder />}
    <Reorder.Group
      as="ul"
      axis="y"
      values={blocks}
      onReorder={handleReorder}
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
