import linkIcon from "@/assets/icons/icon_link.png";
import textIcon from "@/assets/icons/icon_text.png";
import imageIcon from "@/assets/icons/icon_image.png";
import divideIcon from "@/assets/icons/icon_divide.png";
import videoIcon from "@/assets/icons/icon_video.png";
import calendarIcon from "@/assets/icons/icon_calendar.png";
import giftIcon from "@/assets/icons/icon_gift.png";
import { BlockType } from "@/enums/block-type.enum";

export const blockData = [
  {
    id: 1,
    type: BlockType.LINK,
    icon: linkIcon,
    alt: "link",
    bgColor: "#F97316", // bg-orange-600
    title: "링크",
    description: "연결하고 싶은 url은 무엇이든 추가하세요",
  },
  {
    id: 2,
    type: BlockType.TEXT,
    icon: textIcon,
    alt: "text",
    bgColor: "#22C55E", // bg-green-500
    title: "텍스트",
    description: "공유하고 싶은 글이 있다면 적어보세요",
  },
  {
    id: 3,
    type: BlockType.IMAGE,
    icon: imageIcon,
    alt: "image",
    bgColor: "#38BDF8", // bg-sky-400
    title: "이미지",
    description: "보여주고 싶은 이미지로 표현하세요",
  },
  {
    id: 4,
    type: BlockType.DIVIDER,
    icon: divideIcon,
    alt: "divider",
    bgColor: "#84CC16", // bg-lime-500
    title: "구분선",
    description: "블록과 블록 사이를 구분할 수 있어요",
  },
  {
    id: 5,
    type: BlockType.VIDEO,
    icon: videoIcon,
    alt: "video",
    bgColor: "#A855F7", // bg-purple-500
    title: "동영상",
    description: "유튜브, 틱톡 등 동영상을 공유하세요",
  },
  {
    id: 6,
    type: BlockType.CALENDAR,
    icon: calendarIcon,
    alt: "calendar",
    bgColor: "#EC4899", // bg-pink-500
    title: "캘린더",
    description: "다가오는 중요한 이벤트의 일정을 알리세요",
  },
  {
    id: 7,
    type: BlockType.EVENT,
    icon: giftIcon,
    alt: "gift",
    bgColor: "#FACC15", // bg-yellow-500
    title: "이벤트",
    description: "이벤트 응모부터, 추첨까지 진행해보세요",
  },
];
