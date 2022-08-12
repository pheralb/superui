import * as React from "react";
import { ButtonProps } from "./button.types";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button>{children}</button>;
};
