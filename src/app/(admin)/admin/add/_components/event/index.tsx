"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function EventForm() {
  const { state, dispatch } = useBlockForm();

  if (state.type !== BlockType.EVENT) return null;
  return (
    <>
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
      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
