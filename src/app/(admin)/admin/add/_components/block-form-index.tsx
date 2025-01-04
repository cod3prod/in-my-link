"use client";

import { useBlockForm } from "@/hooks/use-block-form";

export default function BlockFormIndex() {
  const { state } = useBlockForm();
  if (state.type === null) return null;
  return <div>BlockFormIndex</div>;
}
