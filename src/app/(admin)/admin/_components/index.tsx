"use client";

import BlockContainer from "./block-container";
import ProfileCard from "./profile-card";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import NotAuthenticated from "@/components/ui/not-authenticated";
import { useEffect, useState } from "react";
import { sortBySequence } from "@/utils/sort";
import Loader from "@/components/ui/loader";

export default function Admin() {
  const { session } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>();
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session) return;
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("profiles")
          .select("*, blocks(*, schedules(*))")
          .eq("user_id", session?.user.id)
          .single();
        if (error) throw error;
        setProfile({
          id: data.id,
          user_id: data.user_id,
          username: data.username,
          path: data.path,
          profile_img: data.profile_img,
          visitor_count: data.visitor_count,
          updated_at: data.updated_at,
          created_at: data.created_at,
        });
        setLoading(false);
        setBlocks(sortBySequence(data.blocks, "sequence", "asc"));
      } catch (err) {
        setLoading(false);
        console.error("Unexpected error:", err);
      }
    };
    fetchData();
  }, [session]);

  if (!session) return <NotAuthenticated />;

  return (
    <>
      {loading && <Loader />}
      {profile && <ProfileCard profile={profile} />}
      <BlockContainer blocks={blocks} />
    </>
  );
}
