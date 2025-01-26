"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import DividerBlock from "@/components/block/divider-block";
import LinkBlock from "@/components/block/link-block";

export default function DividerPreview() {
  const { state } = useBlockForm();

  return (
    <>
      <p className="input-label">미리보기</p>
      <div className="mx-auto mb-10 h-56 w-full bg-slate-100 px-4 pt-4">
        <div className="mx-auto h-full rounded-tl-3xl rounded-tr-3xl bg-white px-2 pt-2 shadow-lg">
          <div className="mx-auto h-full w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl border-1 border-gray-100 px-4 pt-4">
            <LinkBlock
              style={2}
              title={"🌺IN MY FLOWER🌺"}
              url={""}
              img_url={"/example_image_001.webp"}
            />
            <DividerBlock dividerStyle={state.style || 1} className="h-10"/>
            <LinkBlock
              style={2}
              title={"♥ IN MY LINK ♥"}
              url={""}
              img_url={"/example_image_002.webp"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
