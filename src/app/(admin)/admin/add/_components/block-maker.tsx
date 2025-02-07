"use client";
import { blockData } from "@/data/block-maker";
import BlockMakerItem from "./block-maker-item";
import { useBlockForm } from "@/hooks/use-block-form";
import BackButton from "@/components/ui/back-button";

export default function BlockMaker() {
  const { state } = useBlockForm();

  if (state.type !== null) {
    return null;
  }

  return (
    <>
      <div className="mb-6 flex items-center">
        <BackButton url="/admin" />
        <p className="page-name grow text-center">블록 선택하기</p>
        <div className="w-10" />
      </div>
      <p className="title">블록 타입</p>

      {blockData.map(({ id, type, icon, alt, bgColor, title, description }) => (
        <BlockMakerItem
          key={id}
          type={type}
          id={id}
          icon={icon}
          alt={alt}
          bgColor={bgColor}
          title={title}
          description={description}
        />
      ))}
    </>
  );
}
