"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import DividerSelector from "./divider-selector";
import DividerPreview from "./divider-preview";

export default function DividerForm() {
  const { state, dispatch } = useBlockForm();

  if (state.type !== BlockType.DIVIDER) return null;
  return (
    <>
      <DividerPreview />
      <DividerSelector />
      <Input
        label="타이틀"
        value={state.title || ""}
        onChange={(e) => {
          dispatch({
            type: "SET_FORM",
            payload: { title: e.target.value },
          });
        }}
        placeholder="링크는 잘 나타낼 수 있는 이름으로 입력해주세요"
        id="title"
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
        id="title"
        required
      />

      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
