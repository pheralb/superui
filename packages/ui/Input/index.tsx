import React from "react";
import { InputProps } from "./input.types";
import { twMerge } from "tailwind-merge";

export const Input = ({
  variant = "primary",
  className,
  ...props
}: InputProps) => {
  const generateClassName = twMerge(
    SHARED_STYLES,
    INPUT_STYLES[variant],
    className
  );

  return <input className={generateClassName} {...props} />;
};

const SHARED_STYLES =
  "px-2 py-1 w-fit font-bold rounded bg-transparent text-black transition-colors duration-200 border-2 focus:outline-none focus:shadow-outline border-gray-500";

const INPUT_STYLES = {
  primary: "hover:border-blue-500 focus:border-blue-500",
  secondary: "hover:border-green-500 focus:border-green-500",
  danger: "hover:border-red-500 focus:border-red-500",
};
