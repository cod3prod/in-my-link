import Image from "next/image";
import handleUp from "@/assets/icons/icon_btn_handle_up.svg";
import handleDrag from "@/assets/icons/icon_btn_handle_drag.svg";
import handleDown from "@/assets/icons/icon_btn_handle_down.svg";

export default function DragTab() {
  return (
    <div className="flex flex-col rounded-l-lg bg-gray-100">
      <button
        className="flex-1"
        type="button"
        // onClick={() => handleMove(index, 'UP')}
      >
        <Image
          className="p-2"
          src={handleUp}
          alt="up button"
          width={30}
          height={30}
        />
      </button>
      <button className="flex-1" type="button">
        <Image
          className="border-y-1 p-2"
          src={handleDrag}
          alt="drag button"
          width={30}
          height={30}
        />
      </button>
      <button
        className="flex-1"
        type="button"
        // onClick={() => handleMove(index, 'DOWN')}
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
