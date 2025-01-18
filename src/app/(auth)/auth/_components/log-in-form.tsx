"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuthForm } from "@/hooks/use-auth-form";
import AuthPrompt from "./auth-prompt";
import { supabase } from "@/libs/supabase-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogInForm() {
  const { state, dispatch } = useAuthForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    dispatch({ type: "SET_FORM", payload: { authForm: "sign-up" } });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: state.email,
        password: state.password,
      });
      setLoading(true);
      if (error) {
        setLoading(false);
        return setError(error.message);
      }
      router.push("/admin");

    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("현재 서버에 문제가 있습니다.");
    }
  };

  if (state.authForm !== "log-in") return null;

  return (
    <>
      <h1 className="page-name text-center mb-6">로그인</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
        <Input
          label="이메일"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: { email: e.target.value } })
          }
          placeholder="이메일을 입력하세요"
          id="email"
          type="email"
          required
        />
        <Input
          label="비밀번호"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "SET_PASSWORD",
              payload: { password: e.target.value },
            })
          }
          placeholder="비밀번호를 입력하세요"
          id="password"
          type="password"
          required
        />
        {error && <p className="text-center text-red-500">{error}</p>}
        <Button
          className="color mt-10 mb-0"
          type="submit"
          disabled={state.disabled || loading}
        >
          IN MY LINK 로그인
        </Button>
      </form>
      <Button className="gray m-0" type="button" onClick={handleClick}>
        IN MY LINK 무료 회원가입
      </Button>
      <AuthPrompt />
    </>
  );
}
