"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import LinkStyleSelctor from "./link-style-selector";
import LinkPreview from "./link-preview";

export default function LinkForm() {
  const { state, dispatch } = useBlockForm();

  if (state.type !== BlockType.LINK) return null;
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

      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
