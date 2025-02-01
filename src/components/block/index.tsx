import { BlockType } from "@/enums/block-type.enum";
import CalendarBlock from "./calendar-block";
import DividerBlock from "./divider-block";
import EventBlock from "./event-block";
import ImageBlock from "./image-block";
import LinkBlock from "./link-block";
import TextBlock from "./text-block";
import VideoBlock from "./video-block";
import { CalendarStyleEnum } from "@/enums/calendar-style.enum";
import Calendar from "../calendar";

export default function Block({
  block,
  className,
}: {
  block: Block;
  className?: string;
}) {
  const { type } = block;

  return (
    <>
      {type === BlockType.CALENDAR &&
        (block.style! === CalendarStyleEnum.LIST ? (
          <CalendarBlock schedules={block.schedules!} />
        ) : (
          <Calendar schedules={block.schedules!} type={block.style!} />
        ))}
      {type === BlockType.DIVIDER && (
        <DividerBlock
          className={className + " my-4"}
          dividerStyle={block.style!}
        />
      )}
      {type === BlockType.EVENT && (
        <EventBlock
          title={block.title!}
          sub_text_01={block.sub_text_01}
          sub_text_02={block.sub_text_02}
          date_start={block.date_start!}
          date_end={block.date_end!}
        />
      )}
      {type === BlockType.IMAGE && (
        <ImageBlock
          img_url={block.img_url!}
          url={block.url}
          title={block.title}
        />
      )}
      {type === BlockType.LINK && (
        <LinkBlock
          style={block.style!}
          title={block.title!}
          url={block.url!}
          img_url={block.img_url}
        />
      )}
      {type === BlockType.TEXT && <TextBlock title={block.title!} />}
      {type === BlockType.VIDEO && <VideoBlock url={block.url!} />}
    </>
  );
}
