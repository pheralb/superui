/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NavBarProps } from "./navigationbar.types";

export const NavigationBar = ({
  variant = "compact",
  children,
  logoSrc = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Brain/3D/brain_3d.png",
  className,
  ...rest
}: NavBarProps) => {
  return (
    <nav>
      {logoSrc && <img src={logoSrc} alt="logo" />}
      {children}
    </nav>
  );
};
