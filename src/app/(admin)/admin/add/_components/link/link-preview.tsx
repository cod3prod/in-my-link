"use client";

import LinkBlock from "@/components/block/link-block";
import { LinkBlockStyleEnum } from "@/enums/link-block-style.enum";
import { useLinkFormStore } from "@/zustand/link-form-store";

export default function LinkPreview() {
  const { form } = useLinkFormStore();
  const img_url = form.image && URL.createObjectURL(form.image);
  return (
    <div className="mb-10 flex w-full items-center justify-center bg-slate-100 px-2 py-4">
      <div className="w-full max-w-sm">
        <LinkBlock
          img_url={img_url || "/example_image_001.webp"}
          url={""}
          title={form.title || "타이틀을 입력해주세요"}
          style={form.style || LinkBlockStyleEnum.THUMBNAIL}
        />
      </div>
    </div>
  );
}
