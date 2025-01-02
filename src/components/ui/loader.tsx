import { twMerge } from "tailwind-merge";

export default function Loader({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "w-8 h-8 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin",
        className
      )}
    ></div>
  );
}
