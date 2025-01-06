"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef } from "react";

interface InputProps extends ComponentPropsWithRef<"textarea"> {
  label: string;
  placeholder: string;
  id: string;
  value?: string;
  className?: string;
  required?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, InputProps>(
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
        <textarea
          ref={ref}
          id={id}
          className={twMerge(value ? "inserted transition-colors duration-500" : "", className)}
          value={value}
          placeholder={placeholder}
          required={required || false}
          {...rest}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
