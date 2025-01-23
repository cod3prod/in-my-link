import { FaTrashAlt } from "react-icons/fa";
import { supabase } from "@/libs/supabase-client";
import { useBlockStore } from "@/zustand/block-store";

export default function DeleteButton({ blockId }: { blockId: number }) {
  const { removeBlock } = useBlockStore();

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from("blocks")
        .delete()
        .eq("id", blockId);
      if (error) throw error;
      removeBlock(blockId);
    } catch (error) {
      console.error("Error deleting block:", error);
    }
  };

  return (
    <button
      className="absolute bottom-2 right-2 cursor-pointer"
      onClick={handleDelete}
    >
      <FaTrashAlt className="cursor-pointer text-xl text-gray-500 hover:text-gray-700" />
    </button>
  );
}
