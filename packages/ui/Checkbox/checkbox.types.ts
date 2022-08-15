import { Variant } from "../variants";

export interface CheckboxProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}
