import Image from "next/image";

export default function ThumbnailStyleLink({
  title,
  img_url,
}: {
  title: string;
  img_url: string;
}) {
  return (
    <div className="flex w-full h-24 justify-between rounded-lg bg-white px-4 py-2 shadow-lg">
      <div className="relative aspect-square h-full rounded-lg bg-slate-300">
        <Image fill className="object-cover rounded-lg" src={img_url} alt="Link Image" />
      </div>
      <div className="flex grow items-center justify-center">
        <p>{title || "타이틀을 입력해주세요"}</p>
      </div>
    </div>
  );
}
