"use client";

import BlockContainer from "./block-container";
import ProfileCard from "./profile-card";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import NotAuthenticated from "@/components/ui/not-authenticated";
import { useEffect, useState } from "react";
import { sortBySequence } from "@/utils/sort";

export default function Admin() {
    const { session } = useAuthStore();
    const [ profile, setProfile ] = useState<Profile|null>();
    const [ blocks, setBlocks ] = useState<Block[]>([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            if(!session) return; 
            try {
                const { data, error } = await supabase
                .from("profiles")
                .select("*, blocks(*, schedules(*))")
                .eq('user_id', session?.user.id)
                .single();
                if(error) throw error;
                console.log(data);
                setProfile({
                    id: data.id,
                    user_id: data.user_id,
                    username: data.username,
                    path: data.path,
                    img_url: data.img_url,
                    visitor_count: data.visitor_count,
                    updated_at: data.updated_at,
                    created_at: data.created_at
                })
                setBlocks(sortBySequence(data.blocks, "sequence", "asc"));
            } catch (err) {
                console.error("Unexpected error:", err);
            }
        }
        fetchData();
    }, [session])

    if(!session) return <NotAuthenticated />;

    return (
    <>
        {profile && <ProfileCard profile={profile}/>}
        <BlockContainer blocks={blocks}/>
    </>
  )
}