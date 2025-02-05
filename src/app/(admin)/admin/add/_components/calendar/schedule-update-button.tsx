"use client";

import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useScheduleStore } from "@/zustand/schedule-store";
import { useState } from "react";
import { supabase } from "@/libs/supabase/client";
import Input from "@/components/ui/input";
import { useBlockForm } from "@/hooks/use-block-form";
import DatetimeSelector from "../datetime-selector";
import Image from "next/image";
import closeIcon from "@/assets/icons/icon_close.png";

export default function ScheduleUpdateButton({
  schedule,
}: {
  schedule: Schedule;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state, dispatch } = useBlockForm();
  const { updateSchedule } = useScheduleStore();

  const handleUpdate = async () => {
    if (!schedule.id) return;
    if (!state.title) throw new Error("You must have a title.");
    if (!state.date_start || !state.date_end)
      throw new Error("You must have a date.");

    const newSchedule = {
      title: state.title,
      date_start: state.date_start,
      date_end: state.date_end,
      url: state.url,
    };
    try {
      const { error } = await supabase
        .from("schedules")
        .update(newSchedule)
        .eq("id", schedule.id);
      if (error) throw error;
      updateSchedule(schedule.id!, newSchedule);
      dispatch({ type: "SET_FORM", payload: { title: "", date_start: "", date_end: "", url: "" } });
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        className="w-16 bg-gray-200 hover:bg-gray-400 my-0"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        수정
      </Button>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="rounded-lg"
      >
        <div className="flex justify-end">
          <Image
            src={closeIcon}
            alt="close"
            className="w-8 h-8 p-1 rounded-md object-contain cursor-pointer hover:bg-gray-100 transition-color duration-300"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="일정"
            id="title"
            value={state.title || ""}
            onChange={(e) => {
              dispatch({
                type: "SET_FORM",
                payload: { title: e.target.value },
              });
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
            onClick={handleUpdate}
            className="color my-4"
            disabled={!state.date_start || !state.date_end || !state.title}
          >
            수정
          </Button>
        </div>
      </Modal>
    </>
  );
}
