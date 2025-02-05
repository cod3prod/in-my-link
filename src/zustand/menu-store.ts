"use client";

import { create } from "zustand";

interface MenuState {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
}));
