"use client";

import CloseButton from "@/components/ui/close-button";
import { useBlockForm } from "@/hooks/use-block-form";
import BlockFormTitle from "./block-form-title";
import LinkForm from "./link";
import TextForm from "./text";
import CalenderForm from "./calender";
import ImageForm from "./image";
import VideoForm from "./video";
import EventForm from "./event";
import DividerForm from "./divider";

export default function BlockFormIndex() {
  const { state, dispatch } = useBlockForm();
  if (state.type === null) return null;
  return (
    <form method="POST" className="flex flex-col min-h-[30vh]">
      <div className="mb-6 flex justify-between items-center">
        <CloseButton
          onClick={() =>
            dispatch({ type: "SET_FORM", payload: { type: null } })
          }
        />
        <BlockFormTitle />
        <div className="w-10" />
      </div>
      <div className="relative flex-1 flex flex-col gap-4">
        <LinkForm />
        <TextForm />
        <ImageForm />
        <DividerForm />
        <VideoForm />
        <EventForm />
        <CalenderForm />
      </div>
    </form>
  );
}
