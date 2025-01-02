"use client";

import BackButton from "@/components/ui/back-button";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function LogInForm({
  setAuthForm,
}: {
  setAuthForm: Dispatch<SetStateAction<string>>;
}) {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    console.log("click");
    setAuthForm("sign-up");
  };

  return (
    <>
      <h1 className="page-name text-center mb-6">로그인</h1>
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
          IN MY LINK 로그인
        </Button>
      </form>
      <Button className="gray m-0" type="button" onClick={handleClick}>
        IN MY LINK 무료 회원가입
      </Button>
      <div className="mt-4 text-center">
        <p
          className="hover:underline underline-offset-4 cursor-pointer title"
          onClick={() => setAuthForm("find-by-email")}
        >
          <span className="text-primary-400 font-bold">비밀번호</span>를
          잊으셨나요?
        </p>
      </div>
    </>
  );
}
