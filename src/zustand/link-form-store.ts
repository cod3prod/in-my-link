"use client";

import { LinkBlockStyleEnum } from "@/enums/link-block-style.enum";
import { create } from "zustand";

interface LinkFormState {
  title: string | null;
  url: string | null;
  image: File | null;
  style: LinkBlockStyleEnum | null;
  profile_id: number | null;
  id: number | null;
}

interface LinkFormActions {
  form: LinkFormState;
  setForm: (
    key: keyof LinkFormState,
    value: string | File | number | null
  ) => void;
  updateForm: (newState: Partial<LinkFormState>) => void;
  resetForm: () => void;
}

const initialState: LinkFormState = {
  title: null,
  url: null,
  image: null,
  style: null,
  profile_id: null,
  id: null,
};

export const useLinkFormStore = create<LinkFormActions>((set) => ({
  form: initialState,
  setForm: (key, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [key]: value,
      },
    })),
  updateForm: (newState) =>
    set((state) => ({
      form: {
        ...state.form,
        ...newState,
      },
    })),
  resetForm: () => set({ form: initialState }),
}));
