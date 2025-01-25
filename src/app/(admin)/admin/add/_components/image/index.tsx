"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import ImageBlock from "@/components/block/image-block";
import { useProfileStore } from "@/zustand/profile-store";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/zustand/auth-store";
import { useReducer, useState } from "react";
import { imageFormReducer, initialState } from "@/reducers/image-form-reducer";
import InputImage from "@/components/ui/input-image";
import Loader from "@/components/ui/loader";

export default function ImageForm() {
  const router = useRouter();
  const { state: form } = useBlockForm(); // 렌더링 판별용
  const { profile } = useProfileStore();
  const { session } = useAuthStore();
  const [state, dispatch] = useReducer(imageFormReducer, initialState); // 이미지 파일 전송을 위한 새로운 reducer
  const [loading, setLoading] = useState(false);

  if (form.type !== BlockType.IMAGE) return null;

  const handleSubmit = async () => {
    if (!state.image) throw new Error("You must have a image.");
    if (!state.title) throw new Error("You must have a title.");
    if (!profile || !session) return null;

    const newFormData = new FormData();
    newFormData.append("title", state.title);
    newFormData.append("url", state.url || "");
    newFormData.append("image", state.image);
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

      router.push("/admin");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFile = (file: File | null) => {
    dispatch({ type: "SET_FORM", payload: { image: file } });
  };

  const img_url = state.image && URL.createObjectURL(state.image);
  return (
    <>
      <InputImage label="이미지" setValue={handleFile} required />

      <ImageBlock img_url={img_url} title={state.title} url={state.url} />

      <div className="relative">
        <Input
          label="타이틀"
          value={state.title || ""}
          onChange={(e) => {
            dispatch({
              type: "SET_FORM",
              payload: { title: e.target.value },
            });
          }}
          placeholder="이미지 하단에 함께 보여줄 수 있어요."
          id="title"
          required
        />
        <p className="absolute top-0 right-1">
          {state.title?.length || 0}{" "}
          <span className="text-slate-300">/ 30</span>
        </p>
      </div>
      <Input
        label="연결할 주소"
        value={state.url || ""}
        onChange={(e) => {
          dispatch({ type: "SET_FORM", payload: { url: e.target.value } });
        }}
        placeholder="이미지를 통해 이동시키고 싶은 링크가 있나요?"
        id="url"
      />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.image || !state.title}
      >
        추가 완료
      </Button>
      {loading && <Loader />}
    </>
  );
}
