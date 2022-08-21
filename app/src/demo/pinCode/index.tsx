import { PinCode } from "@superui/styles";

export function PinCodeDemo() {
  function handleSubmit(values: string[]) {
    alert(values.join(""));
  }

  return (
    <div className="component-preview">
      <PinCode length={4} onComplete={handleSubmit} autoSend />
    </div>
  );
}
