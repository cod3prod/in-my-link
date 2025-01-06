import { LinkBlockStyleEnum } from "@/enums/link-block-style.enum";
import ThumbnailStyleLink from "./thumbnail-style-link";
import Link from "next/link";
import CardStyleLink from "./card-style-link";
import BackgroundStyleLink from "./background-style-link";
import SimpleStyleLink from "./simple-style-link";

export default function LinkBlock({
  style,
  title,
  url,
  img_url,
}: {
  style: LinkBlockStyleEnum;
  title: string;
  url: string;
  img_url: string;
}) {
  return (
    <Link href={url} className="transform hover:scale-105 transition-all duration-300 cursor-pointer">
      {style === LinkBlockStyleEnum.THUMBNAIL && <ThumbnailStyleLink img_url={img_url} title={title} />}
      {style === LinkBlockStyleEnum.BACKGROUND && <BackgroundStyleLink img_url={img_url} title={title} />}
      {style === LinkBlockStyleEnum.CARD && <CardStyleLink img_url={img_url} title={title} />}
      {style === LinkBlockStyleEnum.SIMPLE && <SimpleStyleLink title={title}  />}
    </Link>
  );
}
