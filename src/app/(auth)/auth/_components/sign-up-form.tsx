"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";

export default function SignUpForm({
  setAuthForm,
}: {
  setAuthForm: Dispatch<SetStateAction<string>>;
}) {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    console.log("click");
    setAuthForm("log-in");
  };
  return (
    <>
      <h1 className="page-name text-center mb-6">회원가입</h1>
      <form className="flex flex-col gap-4 mb-4">
        <Input
          label="이메일"
          placeholder="이메일을 입력하세요"
          id="email"
          type="email"
        />
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          id="password"
          type="password"
        />
        <Button className="color mt-10 mb-0" type="submit" disabled={disabled}>
          IN MY LINK 회원가입
        </Button>
      </form>
      <Button className="gray m-0" type="button" onClick={handleClick}>
        IN MY LINK 다시 로그인 하기
      </Button>
    </>
  );
}
