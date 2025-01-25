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
import { initialState, linkFormReducer } from "@/reducers/link-form-reducer";
import { useReducer, useState } from "react";
import { useAuthStore } from "@/zustand/auth-store";
import Loader from "@/components/ui/loader";

export default function LinkForm() {
  const router = useRouter();
  const { state: form } = useBlockForm(); // 렌더링 판별용
  const { profile } = useProfileStore();
  const { session } = useAuthStore();
  const [state, dispatch] = useReducer(linkFormReducer, initialState); // 이미지 파일 전송을 위한 새로운 reducer
  const [loading, setLoading] = useState(false);

  if (form.type !== BlockType.LINK) return null;

  const handleSubmit = async () => {
    if (!state.title) throw new Error("You must have a title.");
    if (!state.url) throw new Error("You must have a url.");
    if (!state.image) throw new Error("You must have a image");
    if (!state.style) throw new Error("You must have a style.");
    if (!profile || !session) return null;

    const newFormData = new FormData();
    newFormData.append("title", state.title);
    newFormData.append("url", state.url);
    newFormData.append("image", state.image);
    newFormData.append("style", state.style);
    newFormData.append("profile_id", profile.id.toString());

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

      router.push("/admin");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleFile = (file: File | null) => {
    dispatch({type: "SET_FORM", payload: {image: file}});
  }

  return (
    <>
      <LinkPreview />
      <LinkStyleSelctor />
      <Input
        label="타이틀"
        value={state.title || ""}
        onChange={(e) => {
          dispatch({
            type: "SET_FORM",
            payload: { title: e.target.value },
          });
        }}
        placeholder="링크를 대표하는 타이틀을 입력해주세요"
        id="title"
        required
      />

      <Input
        label="연결할 주소"
        value={state.url || ""}
        onChange={(e) => {
          dispatch({
            type: "SET_FORM",
            payload: { url: e.target.value },
          });
        }}
        placeholder="연결할 주소를 입력해주세요."
        id="url"
        required
      />
      <InputImage
        label="이미지"
        setValue={handleFile}
        required
      />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.url || !state.title || !state.image || !state.style}
      >
        추가 완료
      </Button>
      {loading && <Loader />}
    </>
  );
}
