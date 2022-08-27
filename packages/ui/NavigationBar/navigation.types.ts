import type { NavigationVariant } from "../variants";

export interface NavigationProps {
  variant?: NavigationVariant;
  children?: React.ReactNode;
  logo?: string;
  className?: string;
}
