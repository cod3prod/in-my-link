"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Button from "@/components/ui/button";
import DividerSelector from "./divider-selector";
import DividerPreview from "./divider-preview";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";

export default function DividerForm() {
  const { state } = useBlockForm();
  const { profile } = useProfileStore();

  if (state.type !== BlockType.DIVIDER) return null;

  const handleSubmit = async () => {
    if(!state.style) throw new Error("You must have a style.");
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
      <DividerPreview />
      <DividerSelector />
      <Button
        className="color"
        type="button"
        onClick={handleSubmit}
        disabled={!state.style}
      >
        추가 완료
      </Button>
    </>
  );
}
