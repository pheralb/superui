import React from "react";
import { LinearProgressProps } from "./linearProgress.types";

export const LinearProgress = ({
  variant = "primary",
  type = "determinate",
  value = 0,
  min = 0,
  max = 100,
  className,
  ...rest
}: LinearProgressProps) => {
  const genClassName = `${LINEAR_PROGRESS_BASE} ${VARIANTS[variant]} ${
    className || ""
  }`;

  return (
    <div className="h-1.5 w-full bg-gray-300 rounded" {...rest}>
      <div
        className={genClassName}
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      ></div>
    </div>
  );
};

const LINEAR_PROGRESS_BASE = "h-full rounded";

const VARIANTS = {
  primary: "bg-blue-500",
  secondary: "bg-green-500",
  danger: "bg-red-500",
};
