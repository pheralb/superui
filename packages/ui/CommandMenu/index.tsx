import * as React from "react";
import { CommandMenuProps } from "./cmdk.types";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";

export const CommandMenu = (props: CommandMenuProps) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay asChild />
        <Dialog.Content asChild style={{}}>
          <div
            className="vercel"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          >
            <Command>
              <div
                className="flex flex-col gap-3 text-white"
                cmdk-vercel-badge=""
              >
                Home
              </div>
              <Command.Input autoFocus placeholder="Type command" />
              <Command.List>
                <Command.Item>Apple</Command.Item>
                <Command.Item>Banana</Command.Item>
                <Command.Item>Orange</Command.Item>
              </Command.List>
            </Command>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
