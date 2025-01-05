"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";

export default function CalendarForm() {
  const { state } = useBlockForm();

  if (state.type !== BlockType.CALENDAR) return null;
  return <div>CalendarForm</div>;
}
