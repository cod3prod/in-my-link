"use client";

import BlockContainer from "./block-container";
import ProfileCard from "@/components/profile-card";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import NotAuthenticated from "@/components/ui/not-authenticated";
import { useEffect, useState } from "react";
import { sortBySequence } from "@/utils/sort";
import Loader from "@/components/ui/loader";
import { useBlockStore } from "@/zustand/block-store";

export default function Admin() {
  const { session } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const { setBlocks } = useBlockStore();

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
        setLoading(false);
        setBlocks(sortBySequence(data.blocks, "sequence", "asc"));
      } catch (err) {
        setLoading(false);
        console.error("Unexpected error:", err);
      }
    };
    fetchData();
  }, [session, setBlocks]);

  if (!session) return <NotAuthenticated />;

  return (
    <>
      {loading && <Loader />}
      <ProfileCard />
      <BlockContainer />
    </>
  );
}
