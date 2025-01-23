"use client";

import { create } from "zustand";

interface BlockState {
  blocks: Block[];
  setBlocks: (blocks: Block[]) => void;
  addBlock: (block: Block) => void;
  removeBlock: (blockId: number) => void;
  updateBlock: (blockId: number, newBlock: Partial<Block>) => void;
}

export const useBlockStore = create<BlockState>((set) => ({
  blocks: [],
  setBlocks: (blocks) => set({ blocks }),
  addBlock: (block) => set((state) => ({ blocks: [...state.blocks, block] })),
  removeBlock: (blockId) =>
    set((state) => ({
      blocks: state.blocks.filter((block) => block.id !== blockId),
    })),
  updateBlock: (blockId, newBlock) =>
    set((state) => ({
      blocks: state.blocks.map((block) =>
        block.id === blockId ? { ...block, ...newBlock } : block
      ),
    })),
}));
