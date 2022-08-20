import React, { useState } from "react";
import { PinCodeProps } from "./pinCode.types";

export const PinCode = ({ length = 4 }: PinCodeProps) => {
  const refs: HTMLInputElement[] = [];
  const [current, setCurrent] = useState(0);
  const [, setValues] = useState(new Array(length).fill(""));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length > 0) {
      if (current !== length - 1) refs[current + 1].focus();
      setValues((prev) => {
        const newValues = [...prev];
        newValues[index] = value;
        return newValues;
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Backspace") {
      if (refs.length > 0 && current > 0) {
        refs[current - 1].focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.clipboardData.getData("text");
    if (value.length > 0) {
      refs.forEach((ref, index) => {
        if (index < value.length) {
          ref.value = value[index];
          refs[length - 1].focus();
        }
      });
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
            onPaste={handlePaste}
            onChange={(e) => handleChange(e, index)}
            className="w-12 h-14 rounded-lg border-2 text-2xl font-bold text-center border-gray-300 focus:border-[3px] focus:border-blue-500 ring-0 outline-none"
          />
        );
      })}
    </div>
  );
};
