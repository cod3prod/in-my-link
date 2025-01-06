import Image from "next/image";

export default function SimpleStyleLink({ title }: { title: string }) {
  return (
    <div className="flex w-full h-24 justify-between rounded-lg bg-white px-4 py-2 shadow-lg">
      <div className="flex grow items-center justify-center">
        <p>{title || "타이틀을 입력해주세요"}</p>
      </div>
    </div>
  );
}
