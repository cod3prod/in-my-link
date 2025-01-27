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
    <section
      className={twMerge(
        "relative flex justify-center items-center",
        className
      )}
    >
      {dividerStyle === DividerBlockStyleEnum.NONE && (
        <div className="w-[100px] h-[1px]" />
      )}
      {dividerStyle === DividerBlockStyleEnum.DASHED && (
        <div className="w-[100px] h-[1px]">
          <hr className="w-full border-1 border-dashed border-black" />
        </div>
      )}
      {dividerStyle === DividerBlockStyleEnum.SOLID && (
        <div className="w-[100px] h-[1px]">
          <hr className="w-full border-1 border-black" />
        </div>
      )}
      {dividerStyle === DividerBlockStyleEnum.POINT && (
        <div className="w-[100px]">
          <div className="flex justify-center items-center text-2xl text-black -translate-y-1">
            • • •
          </div>
        </div>
      )}
      {dividerStyle === DividerBlockStyleEnum.ZIGZAG && (
        <Image src={zigzag} alt="zigzag" width={100} height={100} />
      )}
    </section>
  );
}
