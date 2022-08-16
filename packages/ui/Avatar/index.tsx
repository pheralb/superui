/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AvatarProps } from "./avatar.types";
import { twMerge } from "tailwind-merge";
import { SIZES } from "../sizes";

export const Avatar = ({
  size = "sm",
  type = "square",
  className,
  bordered,
  ...props
}: AvatarProps) => {
  const generateClassName = twMerge(
    SHARED_STYLES,
    VARIANTS[type],
    SIZES[size],
    bordered && BORDERED,
    className
  );

  return (
    <div className={generateClassName}>
      <img src={props.src} alt={props.alt} className={VARIANTS[type]} />
    </div>
  );
};

const SHARED_STYLES = "flex items-center justify-center";
const BORDERED = "p-0.5 ring-2 ring-gray-300 dark:ring-gray-500";

const VARIANTS = {
  circle: "rounded-full",
  square: "rounded-lg",
};
