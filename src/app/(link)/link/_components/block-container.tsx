"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase-client";
import Block from "@/components/block";
import { sortBySequence } from "@/utils/sort";
import Loader from "@/components/ui/loader";

export default function BlockContainer() {
  const { path } = useParams();
  const [loading, setLoading] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("profiles")
          .select("id, blocks(*, schedules(*))")
          .eq('path', path)
          .single();
        // data = {id : ~~. blocks: [...]}
        if (error) {
          console.error("Error fetching data:", error);
          return;
        }
        setLoading(false);
        setBlocks(sortBySequence(data.blocks, "sequence", "asc"));
      } catch (err) {
        setLoading(false);
        console.error("Unexpected error:", err);
      }
    };
    
    fetchData();
  }, [path]);
  
  return (
    <>
      {loading && <Loader />}
      {blocks.map((block) => <Block key={block.id} block={block} />)}
    </>
  );
}
