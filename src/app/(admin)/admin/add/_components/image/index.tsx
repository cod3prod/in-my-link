"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import ImageBlock from "@/components/block/image-block";
import { useProfileStore } from "@/zustand/profile-store";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/zustand/auth-store";
import { useState } from "react";
import InputImage from "@/components/ui/input-image";
import Loader from "@/components/ui/loader";
import { useImageFormStore } from "@/zustand/image-form-store";

export default function ImageForm() {
  const router = useRouter();
  const { state } = useBlockForm(); // 렌더링 판별용
  const { profile } = useProfileStore();
  const { session } = useAuthStore();
  const { form, setForm, resetForm } = useImageFormStore(); // 이미지 파일 전송을 위한 새로운 reducer
  const [loading, setLoading] = useState(false);

  if (state.type !== BlockType.IMAGE) return null;

  const handleSubmit = async () => {
    if (!form.image) throw new Error("You must have a image.");
    if (!form.title) throw new Error("You must have a title.");
    if (!profile || !session) return null;

    const newFormData = new FormData();
    newFormData.append("title", form.title);
    newFormData.append("url", form.url || "");
    newFormData.append("image", form.image);
    newFormData.append("profile_id", profile.id.toString());

    try {
      setLoading(true);
      const response = await fetch("/api/image", {
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

  const img_url = form.image && URL.createObjectURL(form.image);
  return (
    <>
      <InputImage label="이미지" setValue={handleFile} required />
      <ImageBlock img_url={img_url} title={form.title} url={form.url} />

      <div className="relative">
        <Input
          label="타이틀"
          value={form.title || ""}
          onChange={(e) => {
            setForm("title", e.target.value);
          }}
          placeholder="이미지 하단에 함께 보여줄 수 있어요."
          id="title"
          required
        />
        <p className="absolute top-0 right-1">
          {form.title?.length || 0}{" "}
          <span className="text-slate-300">/ 30</span>
        </p>
      </div>
      <Input
        label="연결할 주소"
        value={form.url || ""}
        onChange={(e) => {
          setForm("url", e.target.value);
        }}
        placeholder="이미지를 통해 이동시키고 싶은 링크가 있나요?"
        id="url"
      />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!form.image || !form.title}
      >
        추가 완료
      </Button>
      {loading && <Loader />}
    </>
  );
}
