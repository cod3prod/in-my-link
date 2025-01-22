"use client";

import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

type SessionWithProfile = Session & { profile: Profile };

interface AuthState {
  session: SessionWithProfile | null;
  setSession: (session: SessionWithProfile | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
