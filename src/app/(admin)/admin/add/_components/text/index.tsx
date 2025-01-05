"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function TextForm() {
  const { state, dispatch } = useBlockForm();

  if (state.type !== BlockType.TEXT) return null;
  return (
    <>
      <div className="relative">
        <Input
          label="내용 입력"
          value={state.title || ""}
          onChange={(e) => {
            dispatch({
              type: "SET_FORM",
              payload: { title: e.target.value },
            });
          }}
          placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
          id="title"
          required
        />
        <p className="absolute top-0 right-1">
          {state.title?.length || 0}{" "}
          <span className="text-slate-300">/ 500</span>
        </p>
      </div>

      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
