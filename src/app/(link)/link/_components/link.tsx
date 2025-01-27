"use client";

import ProfileCard from "@/components/profile-card";
import BlockContainer from "./block-container";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase-client";
import { sortBySequence } from "@/utils/sort";
import Loader from "@/components/ui/loader";

export default function Link() {
  const { path } = useParams();
  const [loading, setLoading] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("profiles")
          .select("*, blocks(*, schedules(*))")
          .eq("path", path)
          .single();
        // data = {id : ~~, profile_image: ~~ ... , blocks: [...]}
        if (error) throw error;

        setLoading(false);
        const newBlocks = data.blocks.filter(
          (block: Block) => block.active === 1
        );


        const newProfile: Profile = {
            id: data.id,
            user_id: data.user_id,
            username: data.username,
            path: data.path,
            profile_img: data.profile_img,
            public_id: data.public_id,
            visitor_count: data.number | 0,
            updated_at: data.updated_at,
            created_at: data.created_at
        };
        
        setProfile(newProfile);
        setBlocks(sortBySequence(newBlocks, "sequence", "asc"));
      } catch (err) {
        setLoading(false);
        console.error("Unexpected error:", err);
      }
    };

    fetchData();
  }, [path]);

  return (
    <>
      <ProfileCard
        profile_img={profile?.profile_img || null}
        username={profile?.username || "존재하지 않는 링크입니다"}
        className="bg-transparent"
      />
      <BlockContainer blocks={blocks} />
      {loading && <Loader />}
    </>
  );
}
