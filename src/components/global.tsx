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

    // 초기 세션 설정
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        setSession(session);
        await fetchProfile(session.user.id);
      } else {
        setSession(null);
        setProfile(null);
      }
    };

    initializeAuth();

    // 인증 상태 변경 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user?.id) {
          setSession(session);
          await fetchProfile(session.user.id);
        } else {
          setSession(null);
          setProfile(null);
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, [setSession, setProfile]);

  return null;
}