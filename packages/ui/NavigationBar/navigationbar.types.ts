import { NavVariant } from "../variants";

export interface NavBarProps {
  variant?: NavVariant;
  logoSrc?: string;
  children?: React.ReactNode;
  className?: string;
}
