"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import LinkStyleSelctor from "./link-style-selector";
import LinkPreview from "./link-preview";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function LinkForm() {
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();

  if (state.type !== BlockType.LINK) return null;

  const handleSubmit = async () => {
    if (!state.title) throw new Error("You must have a title.");
    if (!state.url) throw new Error("You must have a url.");
    if (!state.img_url) throw new Error("You must have a image url.");
    if (!state.style) throw new Error("You must have a style.");
    if (!profile) throw new Error("You must have a profile.");
    console.log("state", state);
    console.log("profile", profile);

    try {
      const { data: maxData, error: maxError } = await supabase
        .from("blocks")
        .select("*")
        .eq("profile_id", profile.id)
        .order("sequence", { ascending: false })
        .limit(1)
        .single();

      if (maxError) throw maxError;

      const { data: insertData, error: insertError } = await supabase
        .from("blocks")
        .insert({
          ...state,
          profile_id: profile.id,
          sequence: maxData?.sequence ? maxData.sequence + 1 : 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (insertError) throw insertError;

      console.log("insertData", insertData);
    } catch (error) {
      console.error(error);
    }
  };
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

      <Input
        label="이미지"
        value={state.img_url || ""}
        onChange={(e) => {
          dispatch({
            type: "SET_FORM",
            payload: { img_url: e.target.value },
          });
        }}
        placeholder="이미지의 주소를 입력해주세요."
        id="img_url"
        required
      />

      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.url || !state.title || !state.img_url}
      >
        추가 완료
      </Button>
    </>
  );
}
