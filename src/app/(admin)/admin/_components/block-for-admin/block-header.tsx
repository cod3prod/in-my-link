import { BlockType } from "@/enums/block-type.enum";
import Image, { StaticImageData } from "next/image";
import dividerIcon from "@/assets/icons/icon_divide.png";
import videoIcon from "@/assets/icons/icon_video.png";
import linkIcon from "@/assets/icons/icon_link.png";
import imageIcon from "@/assets/icons/icon_image.png";
import eventIcon from "@/assets/icons/icon_gift.png";
import textIcon from "@/assets/icons/icon_text.png";
import calendarIcon from "@/assets/icons/icon_calendar.png";
import ActiveTab from "./active-tab";

const blockTypeMap: Record<BlockType, { title: string; src: StaticImageData }> =
  {
    [BlockType.DIVIDER]: { title: "구분선", src: dividerIcon },
    [BlockType.VIDEO]: { title: "동영상", src: videoIcon },
    [BlockType.LINK]: { title: "링크", src: linkIcon },
    [BlockType.IMAGE]: { title: "이미지", src: imageIcon },
    [BlockType.EVENT]: { title: "이벤트", src: eventIcon },
    [BlockType.TEXT]: { title: "텍스트", src: textIcon },
    [BlockType.CALENDAR]: { title: "캘린더", src: calendarIcon },
  };

export default function BlockHeader({
  type,
  active,
  blockId
}: {
  type: BlockType;
  active: 0 | 1;
  blockId: number;
}) {
  return (
    <div className="flex items-center justify-between h-7 px-2">
      <div className="flex items-center gap-1 text-xs font-semibold text-primary">
        <Image
          src={blockTypeMap[type].src}
          alt="type image"
          width={15}
          height={15}
        />
        <p>{blockTypeMap[type].title}</p>
      </div>
      <ActiveTab active={active} blockId={blockId} />
    </div>
  );
}
