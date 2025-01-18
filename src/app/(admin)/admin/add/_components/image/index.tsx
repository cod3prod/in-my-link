"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import ImageBlock from "@/components/block/image-block";

export default function ImageForm() {
  const { state, dispatch } = useBlockForm();

  if (state.type !== BlockType.IMAGE) return null;
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

      <ImageBlock
        img_url={state.img_url}
        title={state.title}
        url={state.url}
      />

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
      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
