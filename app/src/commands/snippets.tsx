import CopyIcon from "@/components/icons/copyIcon";

export const snippets = [
  {
    name: "Button Snippet",
    onSelect: () => {
      navigator.clipboard.writeText(
        "import { Button } from '@superui/styles';"
      );
    },
    icon: <CopyIcon />,
  },
  {
    name: "Input Snippet",
    onSelect: () => {
      navigator.clipboard.writeText("import { Input } from '@superui/styles';");
    },
    icon: <CopyIcon />,
  },
  {
    name: "Avatar Snippet",
    onSelect: () => {
      navigator.clipboard.writeText(
        "import { Avatar } from '@superui/styles';"
      );
    },
    icon: <CopyIcon />,
  },
  {
    name: "Checkbox Snippet",
    onSelect: () => {
      navigator.clipboard.writeText(
        `import { Checkbox } from '@superui/styles';
import "@superui/styles/dist/styles/main.css";`
      );
    },
    icon: <CopyIcon />,
  },
].map((item, index) => ({
  ...item,
  type: "Snippet",
}));
