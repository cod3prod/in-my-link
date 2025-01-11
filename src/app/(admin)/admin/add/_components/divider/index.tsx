"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Button from "@/components/ui/button";
import DividerSelector from "./divider-selector";
import DividerPreview from "./divider-preview";

export default function DividerForm() {
  const { state } = useBlockForm();

  if (state.type !== BlockType.DIVIDER) return null;
  return (
    <>
      <DividerPreview />
      <DividerSelector />
      <Button className="color" type="submit">
        추가 완료
      </Button>
    </>
  );
}
