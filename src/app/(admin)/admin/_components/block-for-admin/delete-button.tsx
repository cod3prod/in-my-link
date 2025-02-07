import { FaTrashAlt } from "react-icons/fa";
import { supabase } from "@/libs/supabase/client";
import { useBlockStore } from "@/zustand/block-store";
import { BlockType } from "@/enums/block-type.enum";
import { useProfileStore } from "@/zustand/profile-store";
import { useState } from "react";
import Loader from "@/components/ui/loader";

export default function DeleteButton({
  blockId,
  type,
  publicId,
}: {
  blockId: number;
  type: BlockType;
  publicId: string | null;
}) {
  const { profile } = useProfileStore();
  const { removeBlock } = useBlockStore();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const { data : { session } } = await supabase.auth.getSession();
    if (!profile || !session) return;

    try {
      setLoading(true);
      if (type === BlockType.IMAGE || type === BlockType.LINK) {
        if (!publicId) return;
        const { error } = await supabase
          .from("blocks")
          .delete()
          .eq("profile_id", profile.id);
        if (error) throw error;

        const BASE_URL = BlockType.IMAGE === type ? "/api/image" : "/api/link";

        const newFormData = new FormData();
        newFormData.append("public_id", publicId);
        const response = await fetch(BASE_URL, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
          body: newFormData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
      }

      const { error } = await supabase
        .from("blocks")
        .delete()
        .eq("id", blockId);
      if (error) throw error;
      removeBlock(blockId);
    } catch (error) {
      console.error("Error deleting block:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="absolute bottom-2 right-2 cursor-pointer"
        onClick={handleDelete}
      >
        <FaTrashAlt className="cursor-pointer text-xl text-gray-500 hover:text-gray-700" />
      </button>
      {loading && <Loader />}
    </>
  );
}
