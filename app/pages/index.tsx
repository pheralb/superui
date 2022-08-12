import { Button } from "superui";

export default function Docs() {
  return (
    <div className="mx-10 my-4">
      <h1>Docs</h1>
      <div className="flex flex-col gap-3">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="primary" className="bg-gray-600">
          Custom Button
        </Button>
      </div>
    </div>
  );
}
