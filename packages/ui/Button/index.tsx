import { ButtonProps } from "./button.types";
import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const generateClassName = twMerge(
    SHARED_STYLES,
    BUTTON_STYLES[variant],
    className
  );

  return (
    <button className={generateClassName} {...props}>
      {children}
    </button>
  );
};

const SHARED_STYLES =
  "px-4 py-2 w-fit text-base font-medium inline-flex justify-center rounded-md border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

const BUTTON_STYLES = {
  primary:
    "bg-blue-600 text-white font-bold rounded hover:bg-blue-500 focus:ring-blue-500",
  secondary:
    "bg-green-600 text-white font-bold rounded hover:bg-green-500 focus:ring-green-500",
  danger:
    "bg-red-600 text-white font-bold rounded hover:bg-red-500 focus:ring-red-500",
};
