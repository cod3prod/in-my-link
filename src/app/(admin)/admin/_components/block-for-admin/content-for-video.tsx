import Link from "next/link";

export default function ContentForVideo({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="flex input-label gap-3">
      <div className="flex flex-col gap-1">
        <p>{title}</p>
        <Link href={url}>
          <p className="truncate supplementary-info hover:text-blue-500">
            {url}
          </p>
        </Link>
      </div>
    </div>
  );
}
