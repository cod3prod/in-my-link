"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuthForm } from "@/hooks/use-auth-form";
import AuthPrompt from "./auth-prompt";
import { supabase } from "@/libs/supabase/client";

export default function FindByEmailForm() {
  const { state, dispatch } = useAuthForm();

  const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        state.email,
        {
          redirectTo: `${BASE_URL}/update-password`,
        }
      );
      if(data) alert("메일함을 확인해주세요")
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  if (state.authForm !== "find-by-email") return null;

  return (
    <>
      <h1 className="page-name text-center mb-6">이메일 찾기</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="이메일"
          placeholder="가입 시 사용한 이메일을 입력하세요"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: { email: e.target.value } })
          }
          type="email"
          id="email"
          required
        />
        <Button
          className="color mt-10 mb-0"
          type="submit"
          disabled={state.disabled}
        >
          찾기
        </Button>
      </form>
      <AuthPrompt />
    </>
  );
}
