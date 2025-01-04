"use client";

import BackButton from "@/components/ui/back-button";
import { useEffect } from "react";
import SignUpForm from "./sign-up-form";
import LogInForm from "./log-in-form";
import FindByEmailForm from "./find-by-email-form";
import { useAuthForm } from "@/hooks/use-auth-form";

export default function AuthSideEffect() {
  const { state, dispatch } = useAuthForm();
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

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <BackButton />
      <SignUpForm />
      <LogInForm />
      <FindByEmailForm />
    </div>
  );
}
