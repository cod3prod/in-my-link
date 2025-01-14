import { BlockType } from "@/enums/block-type.enum";
import ContentForCalendar from "./content-for-calendar";
import ContentForEvent from "./content-for-event";
import ContentForImage from "./content-for-image";
import ContentForText from "./content-for-text";
import ContentForLink from "./content-for-link";
import ContentForDivider from "./content-for-divider";
import ContentForVideo from "./content-for-video";

export default function BlockContent({ block }: { block: Block }) {
  const {
    type,
    style,
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
      {type === BlockType.IMAGE && (
        <ContentForImage title={title!} img_url={img_url!} url={url} />
      )}
      {type === BlockType.TEXT && <ContentForText title={title!} />}
      {type === BlockType.LINK && (
        <ContentForLink title={title!} url={url!} img_url={img_url} />
      )}
      {type === BlockType.DIVIDER && <ContentForDivider dividerStyle={style!} />}
      {type === BlockType.VIDEO && <ContentForVideo title={title!} url={url!} />}
    </div>
  );
}
