export interface CommandMenuProps {
  data: Data;
}

type Data = {
  heading: string;
  items: {
    name: string;
    shortcut?: string;
    onSelect: () => void;
    icon?: JSX.Element;
  }[];
}[];
