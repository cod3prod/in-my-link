"use client";

import { authFormReducer, initialState } from "@/reducers/auth-form-reducer";
import { createContext, useReducer } from "react";

export const AuthFormContext = createContext<AuthFormContext | null>(null);

export default function AuthFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(authFormReducer, initialState);

  return (
    <AuthFormContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthFormContext.Provider>
  );
}
