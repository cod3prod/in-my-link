"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  placeholder: string;
  id: string;
  value?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, id, label, value, ...rest }, ref) => {
    
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="input-label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={twMerge(
            value ? "inserted" : "",
            className
          )}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
