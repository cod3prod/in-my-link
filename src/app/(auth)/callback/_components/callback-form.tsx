"use client";

import { updateUsername, updatePath } from "@/actions/profile";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CallbackForm() {
  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [path, setPath] = useState("");
  const router = useRouter();

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!nickname || !path) {
      alert("닉네임와 도메인을 입력해주세요");
    }

    setLoading(true);
    try {
      if (nickname) {
        const { success, error } = await updateUsername(nickname);
        if (!success) {
          throw new Error(error);
        }
      }

      if (path) {
        const { success, error } = await updatePath(path);
        if (!success) {
          throw new Error(error);
        }
      }

      router.push("/profile");
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSumbit} className="flex flex-col">
      <div className="space-y-4">
        <Input
          id="nickname"
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <Input
          id="path"
          type="text"
          label="도메인"
          placeholder="링크에 사용될 도메인을 입력해주세요"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={loading || !nickname || !path}>
        확인
      </Button>
    </form>
  );
}
