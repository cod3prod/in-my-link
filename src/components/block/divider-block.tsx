import Image from "next/image";
import zigzag from "@/assets/items/item_zigzag.png";
import { DividerBlockStyleEnum } from "@/enums/divider-block-style.enum";
import { twMerge } from "tailwind-merge";

export default function DividerBlock({
  className,
  dividerStyle,
}: {
  className?: string;
  dividerStyle: DividerBlockStyleEnum;
}) {
  return (
    <section className={twMerge("relative flex justify-center items-center p-4", className)}>
      {dividerStyle === DividerBlockStyleEnum.NONE && (
        <div style={{ width: "100px", height: "1px" }} />
      )}
      {dividerStyle === DividerBlockStyleEnum.DASHED && (
        <div style={{ width: "100px", height: "1px" }}>
          <hr className="w-full border border-dashed border-black" />
        </div>
      )}
      {dividerStyle === DividerBlockStyleEnum.SOLID && (
        <div style={{ width: "100px", height: "1px" }}>
          <hr className="w-full border border-black" />
        </div>
      )}
      {dividerStyle === DividerBlockStyleEnum.POINT && (
        <div style={{ width: "100px" }}>
          <div className="text-center text-2xl text-black">• • •</div>
        </div>
      )}
      {dividerStyle === DividerBlockStyleEnum.ZIGZAG && (
        <Image src={zigzag} alt="zigzag" width={100} height={100} />
      )}
    </section>
  );
}
