import * as React from "react";
import { Avatar } from "../Avatar";
import { SIZES } from "../sizes";
import { AvatarGroupProps } from "./avatarGroup.types";
import { twMerge } from "tailwind-merge";

export const AvatarGroup = ({
  max = 4,
  size = "sm",
  ...props
}: AvatarGroupProps) => {
  const generateClassName = twMerge(
    "flex justify-center items-center text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800",
    SIZES[size]
  );

  return (
    <div className="flex mb-5 -space-x-4">
      {props.data.slice(0, max).map(({ name, alt, src }, index) => {
        return (
          <Avatar
            key={`${index}`}
            src={
              src ||
              `https://source.boringavatars.com/beam/120/${
                name || index
              }?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`
            }
            alt={alt || `${index}`}
            className="hover:-translate-x-2 transition-transform duration-200 ease-in"
            type={props.type || "circle"}
            size={size}
            bordered={props.bordered}
          />
        );
      })}
      <a className={generateClassName} href="#">
        +{props.data.length - max}
      </a>
    </div>
  );
};
