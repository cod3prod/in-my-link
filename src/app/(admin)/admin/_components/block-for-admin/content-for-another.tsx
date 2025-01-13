import Image from "next/image";

export default function ContentForAnother({
  title,
  img_url,
  url,
}: {
  title: string;
  img_url: string | null;
  url: string | null;
}) {
  return (
    <div className="flex space-x-2">
      {img_url && (
        <Image
          src={img_url}
          alt={`${title} image`}
          width={56}
          height={56}
          className="rounded-md"
        />
      )}
      <p>{title}</p>
      {url && <p className="truncate">{url}</p>}
    </div>
  );
}
