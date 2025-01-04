"use client";

import { useContext, useEffect } from "react";
import { BlockFormContext } from "@/contexts/block-form-context";

export function useBlockForm() {
  const context = useContext(BlockFormContext);

  if (!context) {
    throw new Error("useBlockForm must be used within a BlockFormProvider");
  }

  const { state, dispatch } = context;

  useEffect(() => {
    dispatch({ type: "RESET_FORM" });
    dispatch({ type: "SET_FORM", payload: { type: state.type } });
  }, [state.type, dispatch]);

  return context;
}
