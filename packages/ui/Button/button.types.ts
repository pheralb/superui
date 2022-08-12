import type { Variant } from "../variants";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: Variant;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}
