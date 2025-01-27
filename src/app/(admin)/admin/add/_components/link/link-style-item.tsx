"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import card1 from "@/assets/items/item_card_001.png";
import card2 from "@/assets/items/item_card_002.png";
import card3 from "@/assets/items/item_card_003.png";
import card4 from "@/assets/items/item_card_004.png";
import { useLinkFormStore } from "@/zustand/link-form-store";

export default function LinkStyleItem({ index }: { index: number }) {
  const { form, setForm } = useLinkFormStore();

  const descriptions = ["썸네일", "배경", "카드", "심플"];
  const cards = [card1, card2, card3, card4];
  return (
    <div
      className="flex h-24 w-full flex-col items-center justify-center gap-2"
      onClick={() => {
        setForm("style", index + 1);
      }}
    >
      <div
        className={twMerge(
          "flex relative p-2 h-20 w-full rounded-lg border-1 border-gray-400",
          form.style === index + 1 ? "border-primary-450" : ""
        )}
      >
        <Image
          src={cards[index]}
          alt="thumbnail"
          className="object-contain h-full shrink-0"
        />
      </div>
      <p className="input-label text-center">{descriptions[index]}</p>
    </div>
  );
}
