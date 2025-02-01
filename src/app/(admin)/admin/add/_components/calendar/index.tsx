"use client";

import { useBlockForm } from "@/hooks/use-block-form";
import { BlockType } from "@/enums/block-type.enum";
import Calendar from "@/components/calendar";
import Radio from "@/components/ui/radio";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import ScheduleEditContainer from "./schedule-edit-container";
import DatetimeSelector from "../datetime-selector";
import CalendarListPreview from "./calendar-list-preview";
import { supabase } from "@/libs/supabase-client";
import { useProfileStore } from "@/zustand/profile-store";
import Input from "@/components/ui/input";
import { CalendarStyleEnum } from "@/enums/calendar-style.enum";
import { useScheduleStore } from "@/zustand/schedule-store";

export default function CalendarForm() {
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();
  const { schedules, setSchedules } = useScheduleStore();
  const [calendarType, setCalendarType] = useState<CalendarStyleEnum>(
    CalendarStyleEnum.LIST
  );
  const [blockId, setBlockId] = useState<number | null>();

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const { data, error } = await supabase
          .from("blocks")
          .select("*, schedules(*)")
          .eq("profile_id", profile?.id)
          .eq("type", BlockType.CALENDAR)
          .maybeSingle();
        if (error) throw error;
        if (data) {
          setBlockId(data.id);
          setCalendarType(data.style);
          setSchedules(data.schedules);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlock();
    console.log("blockId", blockId);

  }, [blockId, setBlockId, setSchedules, profile?.id]);

  const handleSubmit = async () => {
    if (!profile || !blockId) return;

    try {
      const { data, error } = await supabase.from("schedules").insert({
        title: state.title,
        date_start: state.date_start,
        date_end: state.date_end,
        url: state.url,
        block_id: blockId,
      }).select("*");

      if (error) throw error;
      console.log("data return after insert", data);
      setSchedules([...schedules, data[0]]);
      dispatch({
        type: "SET_FORM",
        payload: { date_start: null, date_end: null, title: null, url: null },
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleTypeChange = async (style: CalendarStyleEnum) => {
    try {
      const { error } = await supabase
        .from("blocks")
        .update({ style })
        .eq("id", blockId);

      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  if (state.type !== BlockType.CALENDAR) return null;

  return (
    <>
      <p className="w-full mt-4 text-xs text-gray-700">
        진행/예정된 일정이 1개 이상이어야
        <br />
        캘린더 블록을 공개할 수 있습니다
      </p>
      <Input
        label="일정"
        id="title"
        value={state.title || ""}
        onChange={(e) =>
          dispatch({ type: "SET_FORM", payload: { title: e.target.value } })
        }
        placeholder="타이틀명을 입력해주세요"
        required
      />
      <DatetimeSelector label="오픈 일시" id="start" />
      <DatetimeSelector label="종료 일시" id="end" />
      <Input
        label="링크"
        id="link"
        value={state.url || ""}
        onChange={(e) =>
          dispatch({ type: "SET_FORM", payload: { url: e.target.value } })
        }
        placeholder="URL을 입력해주세요"
      />
      <Button
        className="color mb-0"
        type="button"
        onClick={handleSubmit}
        disabled={!state.date_start || !state.date_end || !state.title}
      >
        추가 완료
      </Button>
      <hr className="my-4 w-full border-1" />

      <Radio<CalendarStyleEnum>
        setValue={setCalendarType}
        name="type"
        value={calendarType}
        handleChange={handleTypeChange}
        options={[
          { label: "리스트 뷰", value: CalendarStyleEnum.LIST },
          { label: "캘린더 뷰", value: CalendarStyleEnum.CALENDAR },
        ]}
      />
      <CalendarListPreview type={calendarType} />
      <Calendar schedules={schedules} type={calendarType} />

      <hr className="my-4 w-full border-1" />
      <ScheduleEditContainer />
    </>
  );
}
