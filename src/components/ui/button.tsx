import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = (props: ButtonProps) => {
  const { children, className, disabled, onClick, ...rest } = props;
  
  return (
    <button
      className={twMerge("button", disabled ? "disable cursor-not-allowed" : "", className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
