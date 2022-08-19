import React from "react";
import { CommandMenu } from "@superui/styles/CommandMenu";
import { CubeIcon } from "@/components/icons/cubeIcon";
import { Components } from "@/data/sidebarLinks";

const COMPONENTS_LIST = Components.map((item, index) => ({
  name: item.title,
  onSelect: () => {
    window.location.href = item.slug;
  },
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
      ]}
    />
  );
};

export default Commands;
