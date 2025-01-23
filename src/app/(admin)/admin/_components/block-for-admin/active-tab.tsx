"use client";

import { supabase } from "@/libs/supabase-client";
import { useBlockStore } from "@/zustand/block-store";
import { useState } from "react";

export default function ActiveTab({
  active,
  blockId,
}: {
  active: 0 | 1;
  blockId: number;
}) {
  const { updateBlock } = useBlockStore();
  const [isToggled, setIsToggled] = useState(active === 1);

  const handleToggle = async () => {
    try {
      const { error } = await supabase
        .from("blocks")
        .update({ active: isToggled ? 0 : 1 })
        .eq("id", blockId);
      if (error) throw error;
      updateBlock(blockId, { active: isToggled ? 0 : 1 });
      setIsToggled(!isToggled);
    } catch (error) {
      console.error("Error updating block:", error);
    }
  };
  
  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className={`relative h-4 w-8 rounded-full duration-300 ease-in-out ${
          isToggled ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute left-1 top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
            isToggled ? "translate-x-3" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
