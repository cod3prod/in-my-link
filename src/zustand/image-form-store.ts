"use client";

import { create } from "zustand";

interface FormState {
  title: string | null;
  url: string | null;
  image: File | null;
  profile_id: number | null;
  id: number | null;
}

interface ImageFormState {
  form: FormState;
  setForm: (key: keyof FormState, value: string | File | number | null) => void;
  updateForm: (newState: Partial<FormState>) => void;
  resetForm: () => void;
}

const initialState: FormState = {
  title: null,
  url: null,
  image: null,
  profile_id: null,
  id: null,
};

export const useImageFormStore = create<ImageFormState>((set) => ({
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
