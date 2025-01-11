import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export default function TabSelector({
  isOverdue,
  setIsOverdue,
}: {
  isOverdue: boolean;
  setIsOverdue: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex gap-6 px-4 title text-gray-400">
      <p
        className={twMerge(
          "cursor-pointer transition-all duration-300",
          !isOverdue && "text-primary-300 underline underline-offset-8"
        )}
        onClick={() => setIsOverdue(false)}
      >
        진행/예정된
      </p>
      <p
        className={twMerge(
          "cursor-pointer transition-all duration-300",
          isOverdue && "text-primary-300 underline underline-offset-8"
        )}
        onClick={() => setIsOverdue(true)}
      >
        지난
      </p>
    </nav>
  );
}
