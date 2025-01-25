"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase-client";
import Block from "@/components/block";
import { sortBySequence } from "@/utils/sort";
import Loader from "@/components/ui/loader";
import Placeholder from "./placeholder";

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
        const newBlocks = data.blocks.filter((block)=> block.active === 1);
        setBlocks(sortBySequence(newBlocks, "sequence", "asc"));
      } catch (err) {
        setLoading(false);
        console.error("Unexpected error:", err);
      }
    };
    
    fetchData();
  }, [path]);
  
  return (
    <div className="container mx-auto max-w-3xl p-4">
      {loading && <Loader />}
      {blocks.length === 0 && !loading && <Placeholder />}
      {blocks.map((block) => <Block key={block.id} block={block} />)}
    </div>
  );
}
