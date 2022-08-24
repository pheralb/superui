import { Group } from "@superui/styles";

export default function ButtonGroup() {
  return (
    <div className="component-preview">
      <Group variant="solid">
        <Group.Item name="1" className="text-white">
          Item 1
        </Group.Item>
        <Group.Item name="2" className="text-white">
          Item 2
        </Group.Item>
        <Group.Item name="3" className="text-white">
          Item 3
        </Group.Item>
      </Group>
    </div>
  );
}
