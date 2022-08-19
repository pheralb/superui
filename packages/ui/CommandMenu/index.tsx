import { useEffect, useState } from "react";
import { CommandMenuProps } from "./cmdk.types";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ContactIcon,
  DocsIcon,
  FeedbackIcon,
  PlusIcon,
  ProjectsIcon,
  TeamsIcon,
} from "./Icons";

export const CommandMenu = (props: CommandMenuProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
              width: "600px",
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
                <Command.Empty>No results found.</Command.Empty>
                <>
                  {props.data.map((group, index) => (
                    <Command.Group key={index} heading={group.heading}>
                      {group.items.map((item, index) => (
                        <Command.Item key={index} onSelect={item.onSelect}>
                          {item.name}
                        </Command.Item>
                      ))}
                    </Command.Group>
                  ))}
                </>
              </Command.List>
            </Command>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

function Components({ searchComponents }: { searchComponents: () => void }) {
  return (
    <>
      <Command.Group heading="Projects">
        <Item shortcut="S P">
          <ProjectsIcon />
          Search Projects...
        </Item>
        <Item>
          <PlusIcon />
          Create New Project...
        </Item>
      </Command.Group>
      <Command.Group heading="Teams">
        <Item shortcut="⇧ P">
          <TeamsIcon />
          Search Teams...
        </Item>
        <Item>
          <PlusIcon />
          Create New Team...
        </Item>
      </Command.Group>
      <Command.Group heading="Help">
        <Item shortcut="⇧ D">
          <DocsIcon />
          Search Docs...
        </Item>
        <Item>
          <FeedbackIcon />
          Send Feedback...
        </Item>
        <Item>
          <ContactIcon />
          Contact Support
        </Item>
      </Command.Group>
    </>
  );
}

function Item({
  children,
  shortcut,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}
