"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuthForm } from "@/hooks/use-auth-form";
import AuthPrompt from "./auth-prompt";

export default function SignUpForm() {
  const { state, dispatch } = useAuthForm();

  const handleClick = () => {
    console.log("click");
    dispatch({ type: "SET_FORM", payload: { authForm: "log-in" } });
  };

  if(state.authForm !== "sign-up") return null

  return (
    <>
      <h1 className="page-name text-center mb-6">회원가입</h1>
      <form className="flex flex-col gap-4 mb-4">
        <Input
          label="이메일"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: { email: e.target.value } })
          }
          placeholder="이메일을 입력하세요"
          id="email"
          type="email"
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
        />
        <Button className="color mt-10 mb-0" type="submit" disabled={state.disabled}>
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
