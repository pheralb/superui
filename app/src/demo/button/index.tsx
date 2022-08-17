import { Button } from "@superui/styles";

export default function ButtonDemo() {
  return (
    <div className="inline-flex gap-4 w-full p-4 bg-slate-500 bg-opacity-25 rounded-lg">
      <Button variant="primary" onClick={() => alert("Hello World!")}>
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => alert("Hello World!")}>
        Secondary Button
      </Button>
      <Button variant="danger" onClick={() => alert("Hello World!")}>
        Danger Button
      </Button>
    </div>
  );
}
