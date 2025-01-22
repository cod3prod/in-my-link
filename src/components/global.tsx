"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";

export default function Global() {
  const { setSession } = useAuthStore();

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
          const newSession = { ...session, profile };
          setSession(newSession);
        }
      } else {
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
            const newSession = { ...session, profile };
            setSession(newSession);
          }
        } else {
          setSession(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [setSession]);

  return null;
}
