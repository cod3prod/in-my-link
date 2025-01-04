"use client";

import { AuthFormContext } from "@/contexts/auth-form-context";
import { useContext } from "react";

export function useAuthForm() {
    const context = useContext(AuthFormContext);

    if (!context) {
        throw new Error("useAuthForm must be used within a AuthFormProvider");
    }

    return context;
}