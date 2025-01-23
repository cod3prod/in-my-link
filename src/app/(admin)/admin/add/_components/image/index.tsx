"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import ImageBlock from "@/components/block/image-block";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function ImageForm() {
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();

  if (state.type !== BlockType.IMAGE) return null;

  const handleSubmit = async () => {
    if (!state.img_url) throw new Error("You must have a image url.");
    if (!state.title) throw new Error("You must have a title.");
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
      <Input
        label="이미지"
        value={state.img_url || ""}
        onChange={(e) => {
          dispatch({ type: "SET_FORM", payload: { img_url: e.target.value } });
        }}
        placeholder="이미지의 주소를 입력해주세요."
        id="img_url"
        required
      />

      <ImageBlock img_url={state.img_url} title={state.title} url={state.url} />

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
        disabled={!state.img_url || !state.title}
      >
        추가 완료
      </Button>
    </>
  );
}
