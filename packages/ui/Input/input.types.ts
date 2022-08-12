import { InputHTMLAttributes } from "react";
import type { Variant } from "../variants";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: Variant;
}
