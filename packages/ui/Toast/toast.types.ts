export interface ToastProps {
  variant?: "success" | "error" | "warning" | "info";
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
  onClose?: () => void;
}
