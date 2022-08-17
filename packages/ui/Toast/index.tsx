import * as RadixToast from "@radix-ui/react-toast";
import { ToastProps } from "./toast.types";

export const Toast = (props: ToastProps) => {
  return (
    <RadixToast.Root
      duration={props.duration || Infinity}
      open={props.isOpen}
      onOpenChange={(isOpen) => {
        props.onClose && props.onClose();
      }}
      asChild
    >
      <RadixToast.Title asChild>{props.title || "Toast"}</RadixToast.Title>
      <RadixToast.Description asChild>
        <div className="text-sm text-gray-600">{props.description}</div>
      </RadixToast.Description>
      <RadixToast.Action altText={props.title || "Action"} />
      <RadixToast.Close />
    </RadixToast.Root>
  );
};

export const ToastProvider = (props: { children: React.ReactNode }) => {
  return (
    <RadixToast.Provider label="SuperUI-Toast">
      {props.children}
    </RadixToast.Provider>
  );
};
