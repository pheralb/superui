import { Variant } from "../variants";

export interface CircularProgressProps {
  variant?: Variant;
  size?: "md" | "lg" | "xl";
  value?: number;
  className?: string;
}
