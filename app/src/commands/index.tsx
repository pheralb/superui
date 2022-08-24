import { CommandMenu } from "@superui/styles/CommandMenu";
import { CubeIcon } from "@/components/icons/cubeIcon";
import { Components } from "@/data/sidebarLinks";
import { snippets } from "./snippets";

const COMPONENTS_LIST = Components.map((item, index) => ({
  name: item.title,
  onSelect: () => {
    window.location.href = item.slug;
  },
  type: "Component",
}));

const Commands = () => {
  return (
    <CommandMenu
      data={[
        {
          heading: "Components",
          items: [
            {
              name: "All Components",
              onSelect: () => {
                window.location.href = "/docs";
              },
              icon: <CubeIcon />,
            },
            ...COMPONENTS_LIST,
          ],
        },
        {
          heading: "Code Snippets (Select to copy)",
          items: [...snippets],
        },
      ]}
    />
  );
};

export default Commands;
