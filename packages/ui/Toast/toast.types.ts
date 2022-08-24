import { ToastVariant } from "../variants";

export interface ToastProps {
  className?: string;
  children?: React.ReactNode;
  variant?: ToastVariant;
  title?: string;
  description?: string;
  position?:
    | "topcenter"
    | "topright"
    | "topleft"
    | "bottomcenter"
    | "bottomright"
    | "bottomleft";
  duration?: number;
  isOpen?: boolean;
  onClose?: any;
  onOpenChange?: () => void;
}
