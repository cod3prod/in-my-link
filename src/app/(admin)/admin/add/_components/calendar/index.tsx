"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Calendar from "@/components/calendar";
import Radio from "@/components/ui/radio";
import { useState } from "react";


export default function CalendarForm() {
  const { state } = useBlockForm();
  const [ calendarType, setCalendarType ] = useState("list");
  if (state.type !== BlockType.CALENDAR) return null;

  return (
    <>
      <Radio
        setValue={setCalendarType}
        name="type"
        options={[
          { label: "리스트 뷰", value:"list" },
          { label: "캘린더 뷰", value:"calendar" },
        ]}
      />
      <Calendar state={state} type={calendarType} />
    </>
  );
}
