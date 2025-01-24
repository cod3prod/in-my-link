"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import LinkBlock from "@/components/block/link-block";
import { LinkBlockStyleEnum } from "@/enums/link-block-style.enum";

export default function LinkPreview() {
  const { state } = useBlockForm();
  return (
    <div className="mb-10 flex w-full items-center justify-center bg-slate-100 px-2 py-4">
      <div className="w-full max-w-sm">
        <LinkBlock
          img_url={"/example_image_001.webp"}
          url={""}
          title={state.title || "타이틀을 입력해주세요"}
          style={state.style || LinkBlockStyleEnum.THUMBNAIL}
        />
      </div>
    </div>
  );
}
