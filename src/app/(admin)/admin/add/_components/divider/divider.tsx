import Image from "next/image";
import zigzag from "@/assets/items/item_zigzag.png";

export default function Divider({
  className,
  dividerStyle,
}: {
  className: string;
  dividerStyle: number;
}) {
  return (
    <>
      {dividerStyle === 1 && <div className={className}> </div>}
      {dividerStyle === 2 && (
        <div className={className}>
          <hr className="w-full border-1 border-dashed border-black" />
        </div>
      )}
      {dividerStyle === 3 && (
        <div className={className}>
          <hr className="w-full border-1 border-black" />
        </div>
      )}
      {dividerStyle === 4 && (
        <div className={className}>
          <span className="absolute right-0 text-2xl text-black">• • •</span>
        </div>
      )}
      {dividerStyle === 5 && (
        <div className={className}>
          <Image src={zigzag} alt="zigzag" width={100} height={100} />
        </div>
      )}
    </>
  );
}
