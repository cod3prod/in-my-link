"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuthForm } from "@/hooks/use-auth-form";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";
import AuthPrompt from "./auth-prompt";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { state, dispatch } = useAuthForm();
  const { session } = useAuthStore();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

  useEffect(() => {
    // if (!session) return;
    // router.push("/");
  }, [session, router]);

  const handleClick = () => {
    dispatch({ type: "SET_FORM", payload: { authForm: "log-in" } });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result;
    try {
      result = await supabase.auth.signUp({
        email: state.email,
        password: state.password,
        options: {
          emailRedirectTo: `${BASE_URL}/callback`,
        },
      });
      if (result?.error) {
        return setError(result.error.message);
      } else {
        return setMessage("이메일을 확인해주세요.");
      }
    } catch (error) {
      console.error(error);
      setError("현재 서버에 문제가 있습니다.");
    }
  };

  if (state.authForm !== "sign-up") return null;

  return (
    <>
      <h1 className="page-name text-center mb-6">회원가입</h1>
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
          {message && <p className="text-center text-green-500">{message}</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
        <Button
          className="color mt-10 mb-0"
          type="submit"
          disabled={state.disabled}
        >
          IN MY LINK 회원가입
        </Button>
      </form>
      <Button className="gray m-0" type="button" onClick={handleClick}>
        IN MY LINK 다시 로그인 하기
      </Button>
      <AuthPrompt />
    </>
  );
}
