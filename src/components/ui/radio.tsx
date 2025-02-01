"use client";

import { twMerge } from "tailwind-merge";

type RadioOption<T> = {
  label: string;
  value: T;
};

type RadioProps<T> = React.ComponentPropsWithoutRef<"input"> & {
  options: RadioOption<T>[];
  name: string;
  className?: string;
  value: T;
  setValue: (value: T) => void;
  handleChange: (value: T) => Promise<void> | void;
};

export default function Radio<T>(props: RadioProps<T>) {
  const {
    options,
    name,
    className,
    value,
    setValue,
    handleChange,
    ...rest
  } = props;

  const handleClick = async (index: number) => {
    const selectedValue = options[index].value;
    setValue(selectedValue);
    await handleChange(selectedValue);
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
            value={option.value as unknown as string} // T -> unknow -> string
            checked={value === option.value}
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