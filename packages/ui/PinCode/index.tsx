import React, { useState } from "react";
import { PinCodeProps } from "./pinCode.types";

export const PinCode = ({ length = 4, ...props }: PinCodeProps) => {
  const refs: HTMLInputElement[] = [];
  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState(new Array(length).fill(""));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Backspace") {
      if (current === length) {
        refs[length].value = "";
      }

      if (refs.length > 0 && current > 0) {
        refs[current - 1].focus();
      }
    } else {
      refs[current].value = e.key;
      if (current !== length - 1) refs[current + 1].focus();
    }
  };

  return (
    <div className="flex gap-4">
      {Array.from(Array(length).keys()).map((index) => {
        return (
          <input
            key={index}
            ref={(ref) => (refs[index] = ref as HTMLInputElement)}
            id={`pin-code-${index + 1}`}
            type="text"
            maxLength={1}
            onKeyUp={handleKeyDown}
            onFocus={() => setCurrent(index)}
            className="w-12 h-14 rounded-lg border-2 text-2xl font-bold text-center border-gray-300 focus:border-[3px] focus:border-blue-500 ring-0 outline-none"
          />
        );
      })}
    </div>
  );
};