"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";

export default function CalenderForm() {
  const { state } = useBlockForm();

  if (state.type !== BlockType.CALENDER) return null;
  return <div>CalenderForm</div>;
}
