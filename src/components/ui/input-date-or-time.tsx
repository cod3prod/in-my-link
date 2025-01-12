"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef } from "react";
import dateIcon from "@/assets/icons/icon_calendar.png";
import clockIcon from "@/assets/icons/icon_clock.png";
import Image from "next/image";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  id: string;
  type: "date" | "time";
  value?: string;
  className?: string;
  required?: boolean;
}

const InputDateOrTime = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, value, required, ...rest }, ref) => {
    const customIcon = `
    [&::-webkit-calendar-picker-indicator]:opacity-0 
    [&::-webkit-calendar-picker-indicator]:absolute 
    [&::-webkit-calendar-picker-indicator]:top-0 
    [&::-webkit-calendar-picker-indicator]:left-0 
    [&::-webkit-calendar-picker-indicator]:w-full 
    [&::-webkit-calendar-picker-indicator]:h-full 
    [&::-webkit-calendar-picker-indicator]:cursor-pointer
  `.trim();

    return (
      <div className="flex flex-col">
        
          <label htmlFor={id} className={twMerge("input-label", label ? "visible" : "invisible")}>
            {label || "label"}
            {required && (
              <span className="transform translate-x-1 translate-y-1 inline-block text-primary-300">
                *
              </span>
            )}
          </label>
        
        <div className="relative">
          <input
            ref={ref}
            id={id}
            className={twMerge(
              customIcon,
              value ? "inserted transition-colors duration-500" : "",
              className
            )}
            type={type}
            value={value || ""}
            required={required || false}
            {...rest}
          />
          {type == "date" && (
            <Image
              src={dateIcon}
              alt="date icon"
              width={20}
              height={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 filter brightness-0"
            />
          )}
          {type == "time" && (
            <Image
              src={clockIcon}
              alt="clock icon"
              width={20}
              height={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 filter brightness-0"
            />
          )}
        </div>
      </div>
    );
  }
);

InputDateOrTime.displayName = "InputDate";

export default InputDateOrTime;
