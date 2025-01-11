"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import DividerBlock from "@/components/block/divider-block";
import LinkBlock from "@/components/block/link-block";

export default function DividerPreview() {
  const { state } = useBlockForm();

  return (
    <>
      <p className="input-label">미리보기</p>
      <div className="mx-auto mb-10 h-56 w-full bg-slate-100 py-4">
        <div className="mx-auto h-full w-1/2 rounded-tl-3xl rounded-tr-3xl bg-white px-2 pt-2 shadow-lg">
          <div className="mx-auto h-full w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl border border-gray-100 px-4 pt-4">
            <LinkBlock
              style={4}
              title={"♥ 러브의 의류 마켓 ♥"}
              url={""}
              img_url={""}
            />
            <DividerBlock dividerStyle={state.style || 1} />
            <LinkBlock
              style={3}
              title={"♥ 러브의 의류 마켓 ♥"}
              url={""}
              img_url={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
