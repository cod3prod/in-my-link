"use client";

import AuthFormProvider from "@/contexts/auth-form-context";
import AuthSideEffect from "./auth-side-effect";

export default function AuthIndex() {
  return (
    <AuthFormProvider>
      <AuthSideEffect />
    </AuthFormProvider>
  );
}
