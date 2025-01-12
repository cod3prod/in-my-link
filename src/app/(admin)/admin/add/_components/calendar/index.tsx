"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Calendar from "@/components/calendar";
import Radio from "@/components/ui/radio";
import { useState } from "react";
import Button from "@/components/ui/button";
import ScheduleEditContainer from "./schedule-edit-container";
import { dummySchedules as schedules } from "@/data/dummy";
import DatetimeSelector from "../datetime-selector";
import CalendarListPreview from "./calendar-list-preview";

export default function CalendarForm() {
  const { state } = useBlockForm();
  const [calendarType, setCalendarType] = useState("list");
  if (state.type !== BlockType.CALENDAR) return null;

  return (
    <>
      <p className="w-full mt-4 text-xs text-gray-700">
        진행/예정된 일정이 1개 이상이어야
        <br />
        캘린더 블록을 공개할 수 있습니다
      </p>
      <DatetimeSelector label="오픈 일시" id="start" />
      <DatetimeSelector label="종료 일시" id="end" />
      <Button className="color mb-0" type="submit">
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
      <CalendarListPreview schedules={schedules} type={calendarType} />
      <Calendar state={state} type={calendarType} />
      <hr className="my-4 w-full border" />
      <ScheduleEditContainer schedules={schedules} />
    </>
  );
}
