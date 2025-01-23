"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function Global() {
  const { setSession } = useAuthStore();
  const { setProfile } = useProfileStore();

  useEffect(() => {
    const fetchProfile = async (userId: string | undefined) => {
      if (!userId) return;

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
      }
    };

    // 세션 초기화
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user?.id) {
        setSession(session);
        fetchProfile(session.user.id);
      } else {
        setSession(null);
        setProfile(null);
      }
    };

    // 세션 갱신 및 상태 업데이트
    const refreshSessionPeriodically = () => {
      const intervalId = setInterval(async () => {
        const { data, error } = await supabase.auth.refreshSession();
        if (data?.session) {
          setSession(data.session);
          fetchProfile(data.session.user.id);
        } else if (error) {
          console.error("Error refreshing session:", error);
        }
      }, 5 * 60 * 1000); // 5분마다 갱신

      return intervalId;
    };

    // 초기 세션 가져오기
    initSession();

    // 세션 상태 변경 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user?.id) {
          setSession(session);
          fetchProfile(session.user.id);
        } else {
          setSession(null);
          setProfile(null);
        }
      }
    );

    const intervalId = refreshSessionPeriodically();

    return () => {
      subscription.unsubscribe();
      clearInterval(intervalId);
    };
  }, [setSession, setProfile]);

  return null;
}
