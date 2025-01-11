"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Calendar from "@/components/calendar";
import Radio from "@/components/ui/radio";
import { useState } from "react";
import Button from "@/components/ui/button";
import ScheduleEditContainer from "./schedule-edit-container";
import { dummySchedules as schedules } from "@/data/dummy";

export default function CalendarForm() {
  const { state } = useBlockForm();
  const [calendarType, setCalendarType] = useState("list");
  if (state.type !== BlockType.CALENDAR) return null;

  return (
    <>
      <p className="mx-auto max-w-md mt-4 text-center text-base text-gray-900 leading-relaxed bg-gray-50 p-4 border-l-4 border-gray-300 shadow-lg rounded-md">
        진행/예정된 일정이 1개 이상이어야
        <br />
        캘린더 블록을 공개할 수 있습니다
      </p>
      <Button className="color" type="submit">
        추가 완료
      </Button>
      <hr className="my-4 w-full border" />
      <Radio
        setValue={setCalendarType}
        name="type"
        options={[
          { label: "리스트 뷰", value: "list" },
          { label: "캘린더 뷰", value: "calendar" },
        ]}
      />
      <Calendar state={state} type={calendarType} />
      <hr className="my-4 w-full border" />
      <ScheduleEditContainer schedules={schedules} />
    </>
  );
}
