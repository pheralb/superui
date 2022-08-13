import Group from "@/../packages/ui/ButtonGroup";
import { Button, Input } from "superui";

export default function Docs() {
  return (
    <div className="mx-10 my-4">
      <h1>Docs</h1>
      <div className="flex flex-col gap-3">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button
          variant="primary"
          className="bg-gray-600 hover:bg-gray-300 hover:text-black"
        >
          Custom Button
        </Button>
        <Input variant="primary" placeholder="Input" type={"text"} />
        <Input variant="secondary" placeholder="Input" type={"date"} />
        <Input variant="danger" placeholder="Input" type={"number"} />
        <Input variant="primary" placeholder="Input" type={"password"} />
        <Group variant="outline">
          <Group.Item name="1">Item 1</Group.Item>
          <Group.Item name="2">Item 2</Group.Item>
          <Group.Item name="3">Item 3</Group.Item>
        </Group>
        <Group variant="solid">
          <Group.Item name="1">Item 1</Group.Item>
          <Group.Item name="2">Item 2</Group.Item>
          <Group.Item name="3">Item 3</Group.Item>
        </Group>
      </div>
    </div>
  );
}
