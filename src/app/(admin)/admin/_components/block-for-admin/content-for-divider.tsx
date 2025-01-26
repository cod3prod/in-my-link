import Image from "next/image";
import { DividerBlockStyleEnum } from "@/enums/divider-block-style.enum";
import zigzag from "@/assets/items/item_zigzag.png";

export default function ContentForDivider({
  dividerStyle,
}: {
  dividerStyle: DividerBlockStyleEnum;
}) {
  return (
    <div className="flex input-label gap-3">
      <div className="relative w-20 h-20 flex justify-center items-center rounded-md border-1 border-gray-200">
        {dividerStyle === DividerBlockStyleEnum.DASHED && (
          <hr className="w-full border-1 border-dashed border-black" />
        )}
        {dividerStyle === DividerBlockStyleEnum.SOLID && (
          <hr className="w-full border-1 border-black" />
        )}
        {dividerStyle === DividerBlockStyleEnum.POINT && (
          <div className="text-center text-2xl text-black">• • •</div>
        )}
        {dividerStyle === DividerBlockStyleEnum.ZIGZAG && (
          <Image src={zigzag} alt="zigzag" className="w-full object-fill" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p>
          {dividerStyle === DividerBlockStyleEnum.DASHED && "점선"}
          {dividerStyle === DividerBlockStyleEnum.SOLID && "실선"}
          {dividerStyle === DividerBlockStyleEnum.POINT && "포인트"}
          {dividerStyle === DividerBlockStyleEnum.ZIGZAG && "지그재그"}
          {dividerStyle === DividerBlockStyleEnum.NONE && "공백"}
        </p>
      </div>
    </div>
  );
}
