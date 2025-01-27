"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import LinkStyleSelctor from "./link-style-selector";
import LinkPreview from "./link-preview";
import { useProfileStore } from "@/zustand/profile-store";
import { useRouter } from "next/navigation";
import InputImage from "@/components/ui/input-image";
import { useState } from "react";
import { useAuthStore } from "@/zustand/auth-store";
import Loader from "@/components/ui/loader";
import { useLinkFormStore } from "@/zustand/link-form-store";

export default function LinkForm() {
  const router = useRouter();
  const { state } = useBlockForm(); // 렌더링 판별용
  const { profile } = useProfileStore();
  const { session } = useAuthStore();
  const { form, setForm, resetForm } = useLinkFormStore();
  const [loading, setLoading] = useState(false);

  if (state.type !== BlockType.LINK) return null;

  const handleSubmit = async () => {
    if (!form.title) throw new Error("You must have a title.");
    if (!form.url) throw new Error("You must have a url.");
    if (!form.image) throw new Error("You must have a image");
    if (!form.style) throw new Error("You must have a style.");
    if (!profile || !session) return null;

    const newFormData = new FormData();
    newFormData.append("title", form.title);
    newFormData.append("url", form.url);
    newFormData.append("image", form.image);
    newFormData.append("style", form.style.toString()); // number -> string
    newFormData.append("profile_id", profile.id.toString()); // number -> string

    try {
      setLoading(true);
      const response = await fetch("/api/link", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: newFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Error: ${errorData.error || "Unknown error"}`);
        return;
      }

      resetForm();
      router.push("/admin");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFile = (file: File | null) => {
    setForm("image", file);
  };

  return (
    <>
      <LinkPreview />
      <LinkStyleSelctor />
      <Input
        label="타이틀"
        value={form.title || ""}
        onChange={(e) => {
          setForm("title", e.target.value);
        }}
        placeholder="링크를 대표하는 타이틀을 입력해주세요"
        id="title"
        required
      />

      <Input
        label="연결할 주소"
        value={form.url || ""}
        onChange={(e) => {
          setForm("url", e.target.value);
        }}
        placeholder="연결할 주소를 입력해주세요."
        id="url"
        required
      />
      <InputImage label="이미지" setValue={handleFile} required />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!form.url || !form.title || !form.image || !form.style}
      >
        추가 완료
      </Button>
      {loading && <Loader />}
    </>
  );
}
