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
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, id, label, value, required, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="input-label">
          {label}
          {required && (
            <span className="transform translate-x-1 translate-y-1 inline-block text-primary-300">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={id}
          className={twMerge(value ? "inserted" : "", className)}
          value={value}
          placeholder={placeholder}
          required={required || false}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
