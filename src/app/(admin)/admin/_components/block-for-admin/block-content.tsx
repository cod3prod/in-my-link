import ContentForCalendar from "./content-for-calendar";
import ContentForEvent from "./content-for-event";
import { BlockType } from "@/enums/block-type.enum";
import ContentForAnother from "./content-for-another";

export default function BlockContent({ block }: { block: Block }) {
  const {
    type,
    title,
    sub_text_01,
    date_start,
    date_end,
    img_url,
    url,
    schedules,
  } = block;
  return (
    <div className="px-2 flex-1">
      {type === BlockType.CALENDAR && (
        <ContentForCalendar schedules={schedules!} />
      )}
      {type === BlockType.EVENT && (
        <ContentForEvent
          title={title!}
          sub_text_01={sub_text_01}
          date_start={date_start!}
          date_end={date_end!}
        />
      )}
      {type !== BlockType.EVENT && type !== BlockType.CALENDAR && (
        <ContentForAnother title={title!} img_url={img_url} url={url} />
      )}
    </div>
  );
}
