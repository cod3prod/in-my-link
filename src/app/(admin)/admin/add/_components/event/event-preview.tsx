import EventBlock from "@/components/block/event-block";

export default function EventPreview({ state }: { state: BlockFormState }) {
  return (
    <div className="bg-gray-100 px-2 sm:px-16 py-4">
      <EventBlock
        title={state.title || "타이틀을 입력해주세요"}
        sub_text_01={state.sub_text_01 || "설명"}
        sub_text_02={state.sub_text_02 || "가이드"}
        date_start={state.date_start || new Date().toISOString()}
        date_end={state.date_end || new Date().toISOString()}
      />
    </div>
  );
}
