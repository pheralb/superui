import React from "react";
import { ButtonGroupProps } from "./buttonGroup.types";

const Group = ({
  children,
  variant = "solid",
  size = "medium",
  className,
  ...rest
}: ButtonGroupProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { variant });
    }
    return child;
  });

  const genClassName = `${GROUP_BASE} ${SIZES[size]} ${className}`;

  return (
    <div className={genClassName} {...rest}>
      {childrenWithProps}
    </div>
  );
};

const Item = ({ variant = "solid", children, ...rest }: ButtonGroupProps) => {
  const genClassName = `${ITEM_BASE} ${VARIANTS[variant]} ${rest.className}`;
  return (
    <button className={genClassName} {...rest}>
      {children}
    </button>
  );
};

Group.Item = Item;

export default Group;

const GROUP_BASE = "flex flex-row gap-0";
const ITEM_BASE = "px-4 py-1 border";

const SIZES = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

const VARIANTS = {
  solid: "bg-gray-600 text-white border-transparent",
  outline: "bg-transparent text-black border-black",
  transparent: "bg-transparent text-black",
};
