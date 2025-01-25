"use client";

import Image from "next/image";
import { blockData } from "@/data/block-maker";
import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import { useBlockStore } from "@/zustand/block-store";
import { supabase } from "@/libs/supabase-client";
import { CalendarStyleEnum } from "@/enums/calendar-style.enum";
import { useProfileStore } from "@/zustand/profile-store";

export default function BlockMakerItem({
  icon,
  type,
  alt,
  bgColor,
  title,
  description,
}: (typeof blockData)[0]) {

  const { dispatch } = useBlockForm();
  const { profile } = useProfileStore();
  const { blocks } = useBlockStore();

  const handleMakeCalendar = async () => {
    if (type !== BlockType.CALENDAR || !profile) return;
    if (blocks.find((block) => block.type === BlockType.CALENDAR)) return;

    try {
      const { data } = await supabase
        .from("blocks")
        .select("*")
        .eq("profile_id", profile.id)
        .eq("type", BlockType.CALENDAR);

      if(data!.length>0) return;
      
      const { error } = await supabase
        .from("blocks")
        .insert({
          type: BlockType.CALENDAR,
          style: CalendarStyleEnum.LIST,
          sequence: 0,
          profile_id: profile.id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    dispatch({ type: "SET_FORM", payload: { type } });
    await handleMakeCalendar();
  }

  return (
    <div
      className="px-1 py-2 flex items-center border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="relative flex-shrink-0 flex h-14 w-14 p-2 items-center justify-center rounded-xl"
      >
        <Image
          src={icon}
          alt={alt}
          className="object-contain brightness-0 invert filter"
        />
      </div>
      <div className="ml-4">
        <p className="title">{title}</p>
        <p className="supplementary-info">{description}</p>
      </div>
    </div>
  );
}
