import type { AriaDialogProps } from "@react-types/dialog";

export interface ModalProps extends AriaDialogProps {
  children: React.ReactNode;
  title: string;
  variant?: "default" | "danger" | "confirm";
  blur?: boolean;
  confirmLabel: string;
  onClose: () => void;
  isOpen: boolean;
}
