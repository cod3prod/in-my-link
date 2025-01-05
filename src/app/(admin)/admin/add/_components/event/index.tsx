"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";

export default function EventForm() {
  const { state } = useBlockForm();

  if (state.type !== BlockType.EVENT) return null;
  return <div>EventForm</div>;
}
