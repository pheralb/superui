/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AvatarProps } from "./avatar.types";

export const Avatar = ({
  size = "sm",
  type = "circle",
  className,
  bordered,
  ...props
}: AvatarProps) => {
  const generateClassName = `${SHARED_STYLES} ${VARIANTS[type]} ${
    SIZES[size]
  } ${bordered && BORDERED} ${className || ""}`;

  return (
    <div className={generateClassName}>
      <img src={props.src} alt={props.alt} className={VARIANTS[type]} />
    </div>
  );
};

const SHARED_STYLES = "flex items-center justify-center";
const BORDERED = "border-2 border-gray-300 p-1";

const SIZES = {
  xs: "w-8 h-8",
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
};

const VARIANTS = {
  circle: "rounded-full",
  square: "rounded-lg",
};
