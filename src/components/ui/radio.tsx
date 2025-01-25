"use client";

import { CalendarStyleEnum } from "@/enums/calendar-style.enum";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/libs/supabase-client";

type RadioOption<T> = {
  label: string;
  value: T;
};

type RadioProps<T> =
  React.ComponentPropsWithoutRef<"input"> & {
    options: RadioOption<T>[];
    name: string;
    blockId: number | null;
    className?: string;
    value: T;
    setValue: (value: T) => void;
  };

export default function Radio(props: RadioProps<CalendarStyleEnum>) {
  const { options, name, blockId, className, value, setValue, ...rest } = props;
  
  const handleClick = async (index: number) => {
    if(!blockId) return;
    try {
      console.log(options[index].value);
      const { error } = await supabase
      .from("blocks")
      .update({ style: options[index].value })
      .eq("id", blockId);
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
    setValue(options[index].value);
  };

  return (
    <div className={twMerge("flex", className)}>
    {options.map((option, index) => (
      <label
        key={index}
        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-200"
      >
        <span className={twMerge("input-label mb-0")}>{option.label}</span>
        <input
          className="peer hidden"
          type="radio"
          name={name}
          value={option.value}
          checked={value === options[index].value}
          onChange={() => handleClick(index)}
          {...rest}
        />
        {/* checked */}
        <div className="hidden w-5 h-5 rounded-full border-2 border-primary-450 p-0.5 items-center justify-center peer-checked:flex">
          <div className="w-3 h-3 rounded-full bg-primary-450"></div>
        </div>
        {/* unchecked */}
        <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:hidden"></div>
      </label>
    ))}
  </div>
  );
}
