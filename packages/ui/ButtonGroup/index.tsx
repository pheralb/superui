import React, { useState } from "react";
import { ButtonGroupProps, GroupItemProps } from "./buttonGroup.types";

const Group = ({
  children,
  variant = "solid",
  size = "medium",
  className,
  ...rest
}: ButtonGroupProps) => {
  const [active, setActive] = useState("");

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { variant, active, setActive });
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

const Item = ({
  variant = "solid",
  children,
  onClick,
  name,
  active,
  setActive,
  ...rest
}: GroupItemProps) => {
  const genClassName = `${ITEM_BASE} ${VARIANTS[variant]} ${
    active === name ? ACTIVE_VARIANTS[variant] : ""
  } ${rest.className || ""}`;

  // When clicked set this nav item as active
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    setActive && setActive(name as string);
  };

  return (
    <button className={genClassName} onClick={handleClick}>
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

const ACTIVE_VARIANTS = {
  solid: "bg-gray-800 text-white border-transparent",
  outline: "bg-gray-300 text-black border-black",
  transparent: "bg-white bg-opacity-30 text-black",
};
