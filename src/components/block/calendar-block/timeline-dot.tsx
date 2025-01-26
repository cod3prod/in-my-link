import { twMerge } from "tailwind-merge";

export default function TimelineDot({ isLast } : { isLast: boolean }) {
  return (
    <div className={twMerge("relative ml-4 mr-2 border-1 transform translate-y-4", isLast && "border-none")}>
      <div className="absolute w-2 h-2 rounded-full bg-primary-450 transform translate-x-[-50%] translate-y-[-10%]"></div>
    </div>
  );
}
