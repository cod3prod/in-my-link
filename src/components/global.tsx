"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function Global() {
  const { setSession } = useAuthStore();
  const { setProfile } = useProfileStore();

  useEffect(() => {
    const fetchProfile = async (userId: string) => {
      try {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", userId)
          .single();

        if (error) throw error;
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setProfile(null);
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user?.id) {
        fetchProfile(session.user.id);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("event", _event);
      console.log("session", session);

      setSession(session);
      if (session?.user?.id) {
        setTimeout(async () => {
          await fetchProfile(session.user.id);
        }, 0);
      }
    });

    return () => subscription?.unsubscribe();
  }, [setSession, setProfile]);

  return null;
}
