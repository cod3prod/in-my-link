"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";

export default function FindByEmailForm({
  setAuthForm,
}: {
  setAuthForm: Dispatch<SetStateAction<string>>;
}) {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <h1 className="page-name text-center mb-6">이메일 찾기</h1>
      <form>
        <Input
          label="이메일"
          placeholder="가입 시 사용한 이메일을 입력하세요"
          type="email"
          id="email"
        />
        <Button className="color mt-10 mb-0" type="submit" disabled={disabled}>
          찾기
        </Button>
      </form>
    </>
  );
}
