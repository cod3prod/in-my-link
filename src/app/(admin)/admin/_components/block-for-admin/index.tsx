import { twMerge } from "tailwind-merge";
import DragTab from "./drag-tab";
import BlockHeader from "./block-header";
import BlockContent from "./block-content";
import DeleteButton from "./delete-button";

export default function BlockForAdmin() {
  return (
    <li
      className={twMerge(
        "relative mb-3 flex min-h-32 rounded-lg border border-gray-200 bg-white shadow-lg",
        // isMoving && "transform transition-transform duration-500",
        // blockStyle()
        "overflow-hidden"
      )}
    >
        <DragTab />
        <div className="flex flex-col w-full">
            <BlockHeader type={1} />
            <BlockContent />
            <DeleteButton /> 
        </div>

    </li>
  );
}
