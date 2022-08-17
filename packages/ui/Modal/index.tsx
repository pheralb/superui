import { useRef } from "react";
import {
  useOverlay,
  useModal,
  useDialog,
  FocusScope,
  mergeProps,
} from "react-aria";
import { ExclamationIcon } from "@heroicons/react/outline/";
import { CSSTransition } from "react-transition-group";
import { Button } from "../Button";
import { ModalProps } from "./modal.types";
import { SuperUIOverlay } from "../Overlay";

export function Modal(props: ModalProps) {
  const { children, onClose, confirmLabel } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog",
    },
    ref
  );

  return (
    <SuperUIOverlay>
      <CSSTransition
        in={props.isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 250 }}
        classNames={{
          enter: "opacity-0",
          enterDone: props.blur
            ? "opacity-1 backdrop-blur-md transition ease-in"
            : "opacity-1 transition ease-in",
          exit: "opacity-0 backdrop-blur-none transition ease-out",
        }}
      >
        <div
          className="fixed inset-0 flex justify-center z-100 bg-slate-400/20"
          {...underlayProps}
        >
          <span className="absolute inset-0 w-full h-full" onClick={onClose} />
          <FocusScope contain restoreFocus autoFocus>
            {/* Animate dialog slightly upward when entering, and downward when exiting. */}
            <CSSTransition
              in={props.isOpen}
              appear
              nodeRef={ref}
              timeout={{ enter: 0, exit: 250 }}
              classNames={{
                appear: "translate-y-2",
                appearDone: "translate-y-0 transition ease-in",
                exit: "translate-y-2 transition ease-out",
              }}
            >
              <div
                {...mergeProps(overlayProps, dialogProps, modalProps)}
                ref={ref}
                className="p-8 max-w-sm bg-white/90 border border-gray-300 shadow-2xl rounded-lg z-1 top-[10%] h-fit max-h-[80vh] relative focus:outline-none"
              >
                {props.variant === "danger" && (
                  <ExclamationIcon className="absolute w-6 h-6 text-red-500 right-8 top-8" />
                )}
                <h3 {...titleProps} className="pb-2 text-lg font-bold">
                  {props.title}
                </h3>
                <p className="text-sm text-gray-600">{children}</p>
                <div className="flex justify-end pt-8 space-x-3">
                  <Button onClick={onClose}>Cancel</Button>
                  <Button variant={"danger"} onClick={onClose}>
                    {confirmLabel}
                  </Button>
                </div>
              </div>
            </CSSTransition>
          </FocusScope>
        </div>
      </CSSTransition>
    </SuperUIOverlay>
  );
}
