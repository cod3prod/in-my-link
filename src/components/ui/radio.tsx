import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type RadioOption = {
  label: string;
  value: string;
};

type RadioProps =
  React.ComponentPropsWithoutRef<"input"> & {
    options: RadioOption[];
    name: string;
    className?: string;
    setValue: (value: string) => void;
  };

export default function Radio(props: RadioProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { options, name, className, setValue, ...rest } = props;
  
  const handleChange = (index: number) => {
    setSelectedIndex(index);
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
          checked={index === selectedIndex}
          onChange={() => handleChange(index)}
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
