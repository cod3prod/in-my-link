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

export default function CalendarForm() {
  const { state, dispatch } = useBlockForm();
  const { profile } = useProfileStore();
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [blockId, setBlockId] = useState<number | null>();
  const [calendarType, setCalendarType] = useState("list");

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const { data: blocksData, error: blocksError } = await supabase
          .from("blocks")
          .select("*")
          .eq("profile_id", profile!.id)
          .eq("type", BlockType.CALENDAR)
          .single();

        if (blocksError) throw blocksError;
        setBlockId(blocksData.id);
        // console.log("block", blocksData);

        const { data: schedules, error: schedulesError } = await supabase
          .from("schedules")
          .select("*")
          .eq("block_id", blocksData.id)
          .order("date_start", { ascending: true });
        if (schedulesError) throw schedulesError;
        // console.log("schedules", data);
        setSchedules(schedules);
      } catch (error) {
        console.error(error);
      }
    };
    if (profile) {
      fetchSchedules();
    }
  }, [schedules, profile, state.type, state.id, setSchedules]);

  const handleSubmit = async () => {
    if (!state.date_start || !state.date_end)
      throw new Error("You must have a date.");
    if (!state.title) throw new Error("You must have a title.");
    if (!blockId) return;

    try {
      const { data, error } = await supabase.from("schedules").insert({
        title: state.title,
        url: state.url,
        date_start: state.date_start,
        date_end: state.date_end,
        block_id: blockId,
      });
      if (error) throw error;
      dispatch({
        type: "SET_FORM",
        payload: { title: "", url: "", date_start: "", date_end: "" },
      });
      console.log("schedules", data);
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
        onChange={(e) => {
          dispatch({ type: "SET_FORM", payload: { title: e.target.value } });
        }}
        placeholder="타이틀명을 입력해주세요"
        required
      />
      <DatetimeSelector label="오픈 일시" id="start" />
      <DatetimeSelector label="종료 일시" id="end" />
      <Input
        label="링크"
        id="link"
        value={state.url || ""}
        onChange={(e) => {
          dispatch({ type: "SET_FORM", payload: { url: e.target.value } });
        }}
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
