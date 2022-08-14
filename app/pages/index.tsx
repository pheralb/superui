import { Avatar, Button, Input, LinearProgress, Group } from "superui";

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
        <LinearProgress variant="primary" type="determinate" value={50} />
        <LinearProgress variant="secondary" type="determinate" value={25} />
        <LinearProgress variant="danger" type="determinate" value={75} />
        <div className="inline-flex items-end gap-3">
          <Avatar
            src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
            alt="Prueba"
            size="xs"
            type="square"
          />
          <Avatar
            src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
            alt="Prueba"
            size="sm"
            type="circle"
            bordered
          />
          <Avatar
            src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
            alt="Prueba"
            size="md"
            type="square"
            bordered
          />
          <Avatar
            src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
            alt="Prueba"
            size="lg"
            type="circle"
          />
          <Avatar
            src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
            alt="Prueba"
            size="xl"
            type="square"
            bordered
          />
        </div>
      </div>
    </div>
  );
}
