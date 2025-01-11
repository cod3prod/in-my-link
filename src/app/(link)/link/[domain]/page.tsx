import CalendarBlock from "@/components/block/calendar-block";
import DividerBlock from "@/components/block/divider-block";
import EventBlock from "@/components/block/event-block";
import ImageBlock from "@/components/block/image-block";
import LinkBlock from "@/components/block/link-block/index";
import TextBlock from "@/components/block/text-block";
import VideoBlock from "@/components/block/video-block";
import { DividerBlockStyleEnum } from "@/enums/divider-block-style.enum";
import { dummySchedules as schedules } from "@/data/dummy";

export default function Page() {
  return (
    <article className="flex flex-col gap-4 container mx-auto max-w-3xl p-4">
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
