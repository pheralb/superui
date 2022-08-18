import * as RadixToast from "@radix-ui/react-toast";
import { twMerge } from "tailwind-merge";
import { ToastProps } from "./toast.types";

export const Toast = ({
  className,
  isOpen,
  onOpenChange,
  duration,
  title,
  description,
  variant = "info",
  position = "bottomright",
  ...props
}: ToastProps) => {
  const generateClassName = twMerge(
    SHARED_STYLES,
    TOAST_STYLES[variant],
    className
  );
  const generateVwClassName = twMerge(
    TOAST_VP_STYLES,
    TOAST_POSITION[position]
  );

  return (
    <>
      <RadixToast.Root
        open={isOpen}
        onOpenChange={onOpenChange}
        className={generateClassName}
        duration={duration}
        {...props}
      >
        <RadixToast.Title className="mb-5 text-lg font-medium">
          {title}
        </RadixToast.Title>
        <RadixToast.Description className="text-sm">
          {description}
        </RadixToast.Description>
        <RadixToast.Action altText="prueba" />
        <RadixToast.Close />
      </RadixToast.Root>

      <RadixToast.Viewport className={generateVwClassName} />
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

const SHARED_STYLES =
  "p-4 text-black bg-white rounded-md shadow-md animate-pop-in";

const TOAST_STYLES = {
  info: "bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:ring-blue-500",
  success:
    "bg-green-500 text-white font-bold rounded hover:bg-green-600 focus:ring-blue-500",
  warning:
    "bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 focus:ring-green-500",
  error:
    "bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:ring-red-500",
};
const TOAST_POSITION = {
  topcenter: "top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  topright: "top-0 right-0",
  topleft: "top-0 left-0",
  bottomcenter:
    "-bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  bottomright: "bottom-0 right-0",
  bottomleft: "bottom-0 left-0",
};
const TOAST_VP_STYLES =
  "fixed flex flex-col gap-10 w-96 max-w-screen margin-0 z-[1100] m-6";
