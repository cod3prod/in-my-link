"use client";

import { AuthFormContext } from "@/contexts/auth-form-context";
import { useContext, useEffect } from "react";

export function useAuthForm() {
  const context = useContext(AuthFormContext);

  if (!context) {
    throw new Error("useAuthForm must be used within a AuthFormProvider");
  }

  const { state, dispatch } = context;
  useEffect(() => {
    if (state.authForm !== "find-by-email") {
      dispatch({ type: "RESET_FORM" });
    } else {
      dispatch({ typ: "SET_PASSWORD", payload: { password: "" } });
    }
  }, [state.authForm, dispatch]);

  useEffect(() => {
    if (
      state.authForm !== "find-by-email" &&
      (state.email === "" || state.password === "")
    ) {
      dispatch({ type: "SET_DISABLED", payload: { disabled: true } });
    } else if (state.authForm === "find-by-email" && state.email === "") {
      dispatch({ type: "SET_DISABLED", payload: { disabled: true } });
    } else {
      dispatch({ type: "SET_DISABLED", payload: { disabled: false } });
    }
  }, [state.authForm, state.email, state.password, dispatch]);

  return context;
}
