import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

type Props = {
  children: React.ReactNode;
};

type InputProps = {
  current: {
    textContent?: string;
  };
};

const Pre = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textInput: any = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput?.current?.textContent ?? "");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="relative my-6 w-full h-full bg-gray-800 px-2 rounded-lg border border-gray-400 border-opacity-50"
    >
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-2 top-2 h-8 w-8 inline-flex items-center justify-center rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${
            copied
              ? "border-green-400 focus:border-green-400 focus:outline-none"
              : "border-gray-300"
          }`}
          onClick={onCopy}
        >
          <AnimatePresence initial={false}>
            {copied ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 1 }}
              >
                <CheckIcon />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0 }}
              >
                <CopyIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      )}
      <pre className="w-full h-full overflow-auto max-h-3/4 max-h-96 py-2 rounded-lg">
        {props.children}
      </pre>
    </div>
  );
};

export default Pre;
