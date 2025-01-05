"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import VideoEmbed from "./video-embed";

export default function VideoForm() {
  const { state, dispatch } = useBlockForm();

  if (state.type !== BlockType.VIDEO) return null;
  return (
    <>
      <div className="relative">
        <Input
          label="내용 입력"
          value={state.url || ""}
          onChange={(e) => {
            dispatch({
              type: "SET_FORM",
              payload: { url: e.target.value },
            });
          }}
          placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
          id="url"
          required
        />
      </div>
      <VideoEmbed url={state.url} />
      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
