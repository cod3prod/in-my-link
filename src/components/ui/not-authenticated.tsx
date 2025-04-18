"use client";

import Link from "next/link";
import Button from "./button";
import Background from "../background";

export default function NotAuthenticated() {
  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center text-foreground">
        <h1 className="text-3xl font-semibold mb-4">로그인이 필요합니다</h1>
        <Button className="color mt-0 px-4 w-fit">
          <Link href="/auth">로그인 페이지로 이동</Link>
        </Button>
      </div>
      <Background />
    </>
  );
}
