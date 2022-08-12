import * as React from "react";
import { ButtonProps } from "./button.types";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="px-2 py-1 bg-blue-600 text-white font-bold rounded">
      {children}
    </button>
  );
};
