import * as RadixToast from "@radix-ui/react-toast";
import { ToastProps } from "./toast.types";

export const Toast = (props: ToastProps) => {
  return (
    <>
      <RadixToast.Root
        open={props.isOpen}
        onOpenChange={props.onOpenChange}
        className="p-4 text-black bg-white rounded-md shadow-md animate-slide-in"
      >
        <RadixToast.Title className="mb-5 text-lg font-medium">
          Titulo
        </RadixToast.Title>
        <RadixToast.Description className="text-sm">
          Descripcion 🤑
        </RadixToast.Description>
        <RadixToast.Action altText="prueba" />
        <RadixToast.Close />
      </RadixToast.Root>

      <RadixToast.Viewport className="fixed flex flex-col gap-10 w-96 max-w-screen margin-0 bottom-0 right-0 z-[1100] p-6" />
    </>
  );
};

export const ToastProvider = (props: { children: React.ReactNode }) => {
  return (
    <RadixToast.Provider label="SuperUI-Toast">
      {props.children}
    </RadixToast.Provider>
  );
};
