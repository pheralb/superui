import { Checkbox } from "@superui/styles";

export default function CheckboxDemo() {
  return (
    <div className="component-preview">
      <Checkbox variant="primary" id="primary">
        Checkbox Primary
      </Checkbox>
      <Checkbox variant="secondary" id="secondary">
        Checkbox Secondary
      </Checkbox>
      <Checkbox variant="danger" id="danger">
        Checkbox Danger
      </Checkbox>
    </div>
  );
}
