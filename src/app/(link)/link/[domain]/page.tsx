import ImageBlock from "@/components/ui/block/image-block";
import LinkBlock from "@/components/ui/block/link-block/index";
import TextBlock from "@/components/ui/block/text-block";
import VideoBlock from "@/components/ui/block/video-block";

export default function Page() {
  return (
    <section className="flex flex-col gap-4 container mx-auto max-w-4xl p-4">
      <TextBlock
        title={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
`}
      />
      <VideoBlock url={"https://www.youtube.com/embed/Rj4qtCz99ME?si=VC45C1bcMJ5NHJmG"} />
      <ImageBlock img_url="https://dummyimage.com/300x200/000/fff" title="test" src="https://picsum.photos/200/300" />
      <LinkBlock style={3} title="test" url="https://picsum.photos/200/300" img_url="https://dummyimage.com/300x200/000/fff" />
    </section>
  );
}
