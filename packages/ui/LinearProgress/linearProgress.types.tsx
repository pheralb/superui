import { Variant } from "../variants";

export interface LinearProgressProps {
  variant?: Variant;
  type?: "determinate" | "indeterminate";
  value?: number;
  min?: number;
  max?: number;
  className?: string;
}
