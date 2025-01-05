"use client";

import { useBlockForm } from "@/hooks/use-block-form";

export default function BlockFormTitle() {
  const { state } = useBlockForm();
  let title = "";
  switch (state.type) {
    case 1:
      title = "구분선 블록";
      break;
    case 2:
      title = "동영상 블록";
      break;
    case 3:
      title = "링크 블록";
      break;
    case 4:
      title = "이미지 블록";
      break;
    case 5:
      title = "이벤트 블록";
      break;
    case 6:
      title = "텍스트 블록";
      break;
    case 7:
      title = "캘린더 블록";
      break;
  }

  return <h1 className="page-name">{title}</h1>;
}
