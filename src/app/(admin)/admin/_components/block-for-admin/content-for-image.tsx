import Image from "next/image";
import Link from "next/link";

export default function ContentForImage({
  title,
  img_url,
  url,
}: {
  title: string;
  img_url: string;
  url: string | null;
}) {
  return (
    <div className="flex input-label gap-3">
      <div className="flex-none relative w-20 h-20">
        <Image
          src={img_url}
          alt={`${title} image`}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="min-w-0 flex flex-col gap-1">
        <p className="truncate">{title}</p>
        {url && (
          <Link href={url}>
            <p className="truncate supplementary-info hover:text-blue-500">
              {url}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
