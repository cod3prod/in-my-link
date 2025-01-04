"use client";

import { blockFormReducer, initialState } from "@/reducers/block-form-reducer";
import { createContext, useReducer } from "react";

export const BlockFormContext = createContext<BlockFormContext | null>(null);

export default function BlockFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(blockFormReducer, initialState);

  return (
    <BlockFormContext.Provider value={{ state, dispatch }}>
      {children}
    </BlockFormContext.Provider>
  );
}
