import { Button } from "@superui/styles";
import { BiArrowFromLeft } from "react-icons/bi";

export default function ButtonDemo() {
  return (
    <div className="component-preview">
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

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className + " h-6 w-6"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

export function ButtonWithIcon() {
  return (
    <div className="component-preview">
      <Button
        variant="primary"
        onClick={() => alert("Hello World!")}
        icon={<ArrowIcon />}
        iconPosition="left"
      >
        Primary Button
      </Button>
      <Button
        variant="secondary"
        onClick={() => alert("Hello World!")}
        icon={<ArrowIcon className="rotate-180" />}
        iconPosition="right"
      >
        Secondary Button
      </Button>
    </div>
  );
}

export function CustomButton() {
  return (
    <div className="component-preview">
      <Button
        variant="primary"
        onClick={() => alert("Hello World!")}
        className="bg-transparent border border-white hover:bg-white text-white hover:text-black"
      >
        Custom Button
      </Button>
    </div>
  );
}
