"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { resetPassword } from "@/actions/auth";

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      await resetPassword(newPassword);
      router.push("/");
    } catch {
      setError(
        "비밀번호 변경에 실패했습니다. 6자 이상의 비밀번호를 입력해주세요."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl">
      <h2 className="page-name text-center mb-4">비밀번호 변경</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          label="새로운 비밀번호"
          id="password"
          type="password"
          value={newPassword}
          placeholder="새로운 비밀번호를 입력해주세요"
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary"
        >
          {loading ? "기다려주세요..." : "확인"}
        </Button>
      </form>
    </div>
  );
}
