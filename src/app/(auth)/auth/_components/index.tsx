"use client";

import BackButton from "@/components/ui/back-button";
import SignUpForm from "./sign-up-form";
import LogInForm from "./log-in-form";
import FindByEmailForm from "./find-by-email-form";

export default function Auth() {
  return (
    <div className="mt-28 h-fit w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg">
      <BackButton />
      <SignUpForm />
      <LogInForm />
      <FindByEmailForm />
    </div>
  );
}
