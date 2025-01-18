"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase-client";
import Block from "@/components/block";
import { sortBySequence } from "@/utils/sort";

export default function BlockContainer() {
  const { path } = useParams();
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        
        setBlocks(sortBySequence(data.blocks, "sequence", "asc"));
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };
    
    fetchData();
  }, []);
  
  console.log(blocks);
  return (
    <>
      {blocks.map((block) => <Block key={block.id} block={block} />)}
    </>
  );
}
