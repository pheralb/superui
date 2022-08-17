import React, { useRef, useState, useEffect } from "react";
import { CircularProgressProps } from "./circularProgress.types";
import { twMerge } from "tailwind-merge";
import { SIZES } from "../sizes";

export const CircularProgress = ({
  variant = "primary",
  size = "md",
  value = 0,
  className,
  ...rest
}: CircularProgressProps) => {
  const [elementRadius, setElementRadius] = useState<number | undefined>(0);
  const [counter, setCounter] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const circunference = elementRadius && elementRadius * 0.45 * 2 * Math.PI;
  const genClassName = twMerge(CIRTULAR_PROGRESS_BASE, SIZES[size], className);

  useEffect(() => {
    setElementRadius(ref.current?.offsetWidth);
  }, [ref]);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return (
    <div ref={ref} className={genClassName} {...rest}>
      <svg className="w-full h-full">
        <circle
          className="text-gray-300 w-full h-full"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r={elementRadius && elementRadius * 0.45}
          cx={elementRadius && elementRadius / 2}
          cy={ref.current?.offsetHeight && ref.current?.offsetHeight / 2}
        />
        <circle
          className={VARIANTS[variant]}
          strokeWidth="5"
          strokeDasharray={circunference}
          strokeDashoffset={
            circunference &&
            `${circunference - (counter / 100) * circunference}`
          }
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={elementRadius && elementRadius * 0.45}
          cx={elementRadius && elementRadius / 2}
          cy={ref.current?.offsetHeight && ref.current?.offsetHeight / 2}
        />
      </svg>
      <span className={`absolute text-xl ${VARIANTS[variant]}`}>
        {counter}%
      </span>
    </div>
  );
};

const CIRTULAR_PROGRESS_BASE = "inline-flex items-center justify-center";

const VARIANTS = {
  primary: "text-sky-600",
  secondary: "text-amber-600",
  danger: "text-red-600",
};
