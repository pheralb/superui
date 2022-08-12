import React from "react";
import { ButtonProps } from "./button.types";

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const generateClassName = `${SHARED_STYLES} ${BUTTON_STYLES[variant]} ${
    className || ""
  }`;

  return (
    <button className={generateClassName} {...props}>
      {children}
    </button>
  );
};

const SHARED_STYLES = "px-2 py-1 w-fit font-bold rounded";

const BUTTON_STYLES = {
  primary: "bg-blue-600 text-white font-bold rounded",
  secondary: "bg-green-600 text-white font-bold rounded",
  danger: "bg-red-600 text-white font-bold rounded",
};
