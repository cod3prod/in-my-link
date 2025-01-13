"use clinent";

import Image from "next/image";
import handleUp from "@/assets/icons/icon_btn_handle_up.svg";
import handleDrag from "@/assets/icons/icon_btn_handle_drag.svg";
import handleDown from "@/assets/icons/icon_btn_handle_down.svg";
import { DragControls } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function DragTab({
  moveItem,
  index,
  controls,
}: {
  moveItem: (index: number, direction: "UP" | "DOWN") => void;
  index: number;
  controls: DragControls;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    // PointerDown 이벤트에서 기본 동작을 막아 클릭과 드래그가 충돌하지 않게 함
    e.preventDefault();
    controls.start(e);
  };

  return (
    <div className="flex flex-col bg-gray-100">
      <button
        className="flex-1 hover:bg-gray-200"
        type="button"
        onClick={() => moveItem(index, "UP")}
      >
        <Image
          className="p-2"
          src={handleUp}
          alt="up button"
          width={30}
          height={30}
        />
      </button>
      <div
        className={twMerge(
          "flex items-center justify-center bg-gray-100 flex-1",
          isHovered ? "bg-gray-200" : ""
        )}
      >
        <Image
          onPointerDown={handlePointerDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="border-y-1 p-2 cursor-grab active:cursor-grabbing"
          src={handleDrag}
          alt="drag handler"
          width={30}
          height={30}
        />
      </div>
      <button
        className="flex-1 hover:bg-gray-200"
        type="button"
        onClick={() => moveItem(index, "DOWN")}
      >
        <Image
          className="p-2"
          src={handleDown}
          alt="down button"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
