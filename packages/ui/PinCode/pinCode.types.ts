export interface PinCodeProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onChange?: (values: Array<any>) => void;
  onComplete?: (values: Array<any>) => void;
  values?: Array<any>;
  length?: number;
  autoSend?: boolean;
}
