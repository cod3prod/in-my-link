import Image from "next/image";
import Link from "next/link";

export default function ContentForLink({
  title,
  img_url,
  url,
}: {
  title: string;
  img_url: string | null;
  url: string;
}) {
  return (
    <div className="flex input-label gap-3">
      {img_url && (
        <div className="flex-none relative w-20 h-20">
          <Image
            src={img_url}
            alt={`${title} image`}
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}
      <div className="min-w-0 flex flex-col gap-1">
        <p className="truncate">{title}</p>
        <Link href={url}>
          <p className="truncate supplementary-info hover:text-blue-500">
            {url}
          </p>
        </Link>
      </div>
    </div>
  );
}
