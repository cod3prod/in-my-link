"use client";

import { create } from "zustand";

interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));
