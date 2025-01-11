import CalendarBlock from "@/components/block/calendar-block";
import DividerBlock from "@/components/block/divider-block";
import EventBlock from "@/components/block/event-block";
import ImageBlock from "@/components/block/image-block";
import LinkBlock from "@/components/block/link-block/index";
import TextBlock from "@/components/block/text-block";
import VideoBlock from "@/components/block/video-block";
import { DividerBlockStyleEnum } from "@/enums/divider-block-style.enum";

export default function Page() {
  const schedules: Schedule[] = [
    {
      id: 1,
      block_id: 101,
      title: "첫 번째 일정",
      url: "https://example.com/first",
      date_start: "2024-12-08T09:00:00",
      date_end: "2024-12-10T12:00:00", // 과거 (CLOSED)
    },
    {
      id: 2,
      block_id: 102,
      title: "두 번째 일정",
      url: "https://example.com/second",
      date_start: "2025-01-01T10:00:00",
      date_end: "2025-01-12T16:00:00", // 현재 시간 포함 (OPEN)
    },
    {
      id: 3,
      block_id: 103,
      title: "세 번째 일정",
      url: "https://example.com/third",
      date_start: "2025-01-01T10:00:00",
      date_end: "2025-01-15T11:30:00", // 현재 시간 포함 (OPEN)
    },
    {
      id: 4,
      block_id: 104,
      title: "네 번째 일정",
      date_start: "2025-01-20T15:00:00",
      date_end: "2025-01-20T17:00:00", // 미래 (SOON)
    },
    {
      id: 5,
      title: "다섯 번째 일정",
      date_start: "2025-01-25T08:00:00",
      date_end: "2025-01-25T10:00:00", // 미래 (SOON)
    },
  ];
  
  
  return (
    <article className="flex flex-col gap-4 container mx-auto max-w-4xl p-4">
      <TextBlock
        title={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
`}
      />
      <VideoBlock
        url={"https://www.youtube.com/embed/Rj4qtCz99ME?si=VC45C1bcMJ5NHJmG"}
      />
      <DividerBlock dividerStyle={DividerBlockStyleEnum.POINT} />
      <ImageBlock
        img_url="https://dummyimage.com/300x200/000/fff"
        title="test"
        src="https://picsum.photos/200/300"
      />
      <DividerBlock
        className="w-full"
        dividerStyle={DividerBlockStyleEnum.ZIGZAG}
      />
      <LinkBlock
        style={3}
        title="test"
        url="https://picsum.photos/200/300"
        img_url="https://dummyimage.com/300x200/000/fff"
      />
      <EventBlock
        date_start="2024-09-12T16:00:00"
        date_end="2025-01-11T16:00:00"
      />
      <CalendarBlock schedules={schedules} />
    </article>
  );
}
