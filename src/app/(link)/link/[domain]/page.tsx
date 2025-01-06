import ImageItem from "@/components/ui/block/image-item";
import TextItem from "@/components/ui/block/text-item";
import VideoItem from "@/components/ui/block/video-item";

export default function Page() {
  return (
    <section className="flex flex-col gap-4 container mx-auto max-w-4xl p-4">
      <TextItem
        title={`안녕하세요
지금은 테스트 중입니다.!1
ㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱ
`}
      />
      <VideoItem url={"https://www.youtube.com/embed/Rj4qtCz99ME?si=VC45C1bcMJ5NHJmG"} />
      <ImageItem img_url="https://picsum.photos/200/300" title="test" src="https://picsum.photos/200/300" />
    </section>
  );
}
