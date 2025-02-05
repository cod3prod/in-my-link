"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import VideoBlock from "@/components/block/video-block";
import { convertToEmbedURL } from "@/utils/embed";
import { supabase } from "@/libs/supabase/client";
import { useProfileStore } from "@/zustand/profile-store";
import { useRouter } from "next/navigation";

export default function VideoForm() {
  const router = useRouter();
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();

  if (state.type !== BlockType.VIDEO) return null;

  const handleSubmit = async () => {
    if (!state.url) throw new Error("You must have a url.");
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
        sequence: maxData?.sequence ? maxData.sequence + 1 : 1,
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
      <div className="relative">
        <Input
          label="내용 입력"
          value={state.url ? state.url : ""}
          onChange={(e) => {
            dispatch({
              type: "SET_FORM",
              payload: { url: e.target.value },
            });
          }}
          placeholder="좋아하는 유튜브 동영상을 공유하세요"
          id="url"
          required
        />
      </div>
      <VideoBlock url={state.url ? convertToEmbedURL(state.url) : undefined} />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.url}
      >
        추가 완료
      </Button>
    </>
  );
}
