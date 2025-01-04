"use client";

import BackButton from "@/components/ui/back-button";
import SignUpForm from "./sign-up-form";
import LogInForm from "./log-in-form";
import FindByEmailForm from "./find-by-email-form";

export default function AuthIndex() {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <BackButton />
      <SignUpForm />
      <LogInForm />
      <FindByEmailForm />
    </div>
  );
}
