"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function Global() {
  const { setSession } = useAuthStore();
  const { setProfile } = useProfileStore();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user?.id) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", session.user.id)
          .single();
        if (error) {
          console.error("Error fetching profile:", error);
        } else {
          setProfile(profile);
          setSession(session);
        }
      } else {
        setProfile(null);
        setSession(null);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user?.id) {
          const { data: profile, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("user_id", session.user.id)
            .single();

          if (error) {
            console.error("Error fetching profile:", error);
          } else {
            setProfile(profile);
            setSession(session);
          }
        } else {
          setProfile(null);
          setSession(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [setSession, setProfile]);

  return null;
}
