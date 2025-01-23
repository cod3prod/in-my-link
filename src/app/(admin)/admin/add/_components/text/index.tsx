"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Button from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import { KeyboardEvent } from "react";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function TextForm() {
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();

  if (state.type !== BlockType.TEXT) return null;

  const handleSubmit = async () => {
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

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const cursorPosition = target.selectionStart;
      const beforeCursor = state.title?.slice(0, cursorPosition);
      const afterCursor = state.title?.slice(cursorPosition);

      const newValue = beforeCursor + "\n" + afterCursor;
      dispatch({
        type: "SET_FORM",
        payload: { title: newValue },
      });

      requestAnimationFrame(() => {
        target.selectionStart = cursorPosition + 1;
        target.selectionEnd = cursorPosition + 1;
      });
    }
  };
  return (
    <>
      <div className="relative">
        <Textarea
          label="내용 입력"
          value={state.title || ""}
          onChange={(e) => {
            dispatch({
              type: "SET_FORM",
              payload: { title: e.target.value },
            });
          }}
          onKeyDown={handleKeyDown}
          placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
          id="title"
          required
        />
        <p className="absolute top-0 right-1">
          {state.title?.length || 0}{" "}
          <span className="text-slate-300">/ 500</span>
        </p>
      </div>

      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.title}
      >
        추가 완료
      </Button>
    </>
  );
}
