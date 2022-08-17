import { Button } from "@superui/styles";

export default function ButtonDemo() {
  return (
    <div className="inline-flex gap-4 w-full">
      <Button
        variant="primary"
        className="-mb-3 flex flex-col items-center justify-center"
        onClick={() => alert("Hello World!")}
      >
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => alert("Hello World!")}>
        Secondary Button
      </Button>
    </div>
  );
}
