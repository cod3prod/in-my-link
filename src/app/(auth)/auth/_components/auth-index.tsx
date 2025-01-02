"use client";

import { useState } from "react";
import LogInForm from "./log-in-form";
import FindByEmailForm from "./find-by-email-form";
import SignUpForm from "./sign-up-form";
import BackButton from "@/components/ui/back-button";

export default function AuthIndex() {
    const [authForm, setAuthForm] = useState<string>("log-in");
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <BackButton />
      {authForm === "sign-up" && <SignUpForm setAuthForm={setAuthForm} />}
      {authForm === "log-in" && <LogInForm setAuthForm={setAuthForm} />}
      {authForm === "find-by-email" && <FindByEmailForm setAuthForm={setAuthForm} /> }
      </div>
  );
}
