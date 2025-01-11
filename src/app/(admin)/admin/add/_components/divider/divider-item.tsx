"use client";

import { twMerge } from "tailwind-merge";
import { useBlockForm } from "@/hooks/use-block-form";
import DividerBlock from "@/components/block/divider-block";

export default function DivideItem({ index }: { index: number }) {
  const descriptions = ["공백", "점선", "실선", "포인트", "지그재그"];

  const { state, dispatch } = useBlockForm();

  return (
    <div
      className="flex h-full w-20 flex-col gap-2"
      onClick={() => {
        dispatch({
          type: "SET_FORM",
          payload: { style: index + 1 },
        });
      }}
    >
      <DividerBlock
        className={twMerge(
            "relative flex justify-center items-center aspect-square w-full rounded-lg border border-gray-300",
            state.style === index + 1 ? "border-primary-450" : ""
        )}
        dividerStyle={index + 1}
      />

      <p className="flex items-center justify-center">{descriptions[index]}</p>
    </div>
  );
}
