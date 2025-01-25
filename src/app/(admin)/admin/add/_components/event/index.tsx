"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import EventPreview from "./event-preview";
import DatetimeSelector from "../datetime-selector";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";
import { useRouter } from "next/navigation";

export default function EventForm() {
  const router = useRouter();
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();

  if (state.type !== BlockType.EVENT) return null;

  const handleSubmit = async () => {
    if (!state.title) throw new Error("You must have a title.");
    if (!state.date_start || !state.date_end)
      throw new Error("You must have a date.");
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

      const { error: insertError } = await supabase.from("blocks").insert({
        ...state,
        profile_id: profile.id,
        sequence: maxData?.squence ? maxData.sequence + 1 : 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <EventPreview state={state} />
      <Input
        label="이벤트 명"
        value={state.title || ""}
        onChange={(e) => {
          dispatch({ type: "SET_FORM", payload: { title: e.target.value } });
        }}
        placeholder="이벤트를 잘 나타낼 수 있는 타이틀을 입력해주세요"
        id="title"
        required
      />
      <DatetimeSelector label="오픈 일시" id="start" />
      <DatetimeSelector label="종료 일시" id="end" />
      <Input
        label="이벤트 설명"
        value={state.sub_text_01 || ""}
        onChange={(e) => {
          dispatch({
            type: "SET_FORM",
            payload: { sub_text_01: e.target.value },
          });
        }}
        placeholder="어떤 이벤트인지 설명을 입력해주세요"
        id="sub_text_01"
      />
      <Input
        label="가이드 문구"
        value={state.sub_text_02 || ""}
        onChange={(e) => {
          dispatch({
            type: "SET_FORM",
            payload: { sub_text_02: e.target.value },
          });
        }}
        placeholder="이벤트의 응모 조건이나, 가이드를 작성해보세요"
        id="sub_text_02"
      />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.title || !state.date_start || !state.date_end}
      >
        추가 완료
      </Button>
    </>
  );
}
