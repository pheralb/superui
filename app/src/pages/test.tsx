import { useRef, useState } from "react";

import {
  Avatar,
  AvatarGroup,
  Button,
  Group,
  Modal,
  Checkbox,
  PinCode,
  Toast,
  ToastProvider,
  CircularProgress,
} from "@superui/styles";

import { LinearProgress } from "@superui/styles";
import { Input } from "@superui/styles";

export default function Test() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const timerRef = useRef(0);

  return (
    <>
      <h1>Docs</h1>
      <div className="flex flex-col gap-3">
        <Button variant="primary">Primary Button</Button>
        <PinCode />
        <Checkbox label="Checkbox" variant="primary">
          <span className="text-gray-600">Primary checkbox</span>
        </Checkbox>
        <Group variant="outline">
          <Group.Item name="1">Item 1</Group.Item>
          <Group.Item name="2">Item 2</Group.Item>
          <Group.Item name="3">Item 3</Group.Item>
        </Group>
        <LinearProgress variant="primary" type="determinate" value={60} />
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
        <AvatarGroup
          max={4}
          data={Array.from(Array(10).keys()).map((i) => ({
            name: `${i}`,
            alt: `${i}`,
            src: `https://source.boringavatars.com/beam/120/${i}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`,
          }))}
          size="lg"
        />
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={isOpen}
          title="Delete folder"
          confirmLabel="Delete"
          variant="danger"
          onClose={() => setOpen(false)}
          blur
        >
          Are you sure you want to delete "Documents"? All contents will be
          deleted permanently.
        </Modal>

        <Button variant="primary" onClick={() => setOpen2(!isOpen2)}>
          Open Toast
        </Button>
        <Toast
          isOpen={isOpen2}
          title="Delete folder"
          position="bottomcenter"
          variant="warning"
          description="Are you sure you want to delete 'Documents'? All contents will be deleted permanently."
          duration={2000}
          onClose={() => {
            alert("closed");
          }}
        />
        <CircularProgress value={50} size="md" variant="primary" />
        <CircularProgress value={15} size="xl" variant="secondary" />
        <CircularProgress value={40} size="lg" variant="danger" />
      </div>
    </>
  );
}
