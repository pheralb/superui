import React from "react";
import { CheckboxProps } from "./checkbox.types";

export const Checkbox = ({
  children,
  variant = "primary",
  className,
  id,
  ...props
}: CheckboxProps) => {
  const genClassName = `${BASE_STYLES} ${VARIANTS[variant]} ${className}`;

  return (
    <>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id || "default-checkbox"}
          className={genClassName}
          {...props}
        />
        <label
          htmlFor={id || "default-checkbox"}
          className={"ml-2 font-medium text-gray-900 dark:text-gray-300"}
        >
          {children}
        </label>
      </div>
    </>
  );
};

const BASE_STYLES = "w-5 h-5 form-checkbox";

const VARIANTS = {
  primary: "text-blue-600 focus:ring-blue-500",
  secondary: "text-gray-600 focus:ring-gray-500",
  danger: "text-red-600 focus:ring-red-500",
};
