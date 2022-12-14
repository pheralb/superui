/* eslint-disable no-unused-vars */
import { LinearProgressProps } from "./linearProgress.types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const LinearProgress = ({
  variant = "primary",
  type = "determinate",
  value = 0,
  min = 0,
  max = 100,
  className,
  ...rest
}: LinearProgressProps) => {
  const genClassName = twMerge(
    LINEAR_PROGRESS_BASE,
    VARIANTS[variant],
    className
  );

  return (
    <div className="w-full h-2 bg-gray-300 rounded" {...rest}>
      <motion.div
        className={genClassName}
        animate={{ width: `${((value - min) / (max - min)) * 100}%` }}
        initial={{ width: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.div>
    </div>
  );
};

const LINEAR_PROGRESS_BASE = "h-full rounded";

const VARIANTS = {
  primary: "bg-gradient-to-r from-cyan-500 to-blue-800",
  secondary: "bg-gradient-to-r from-emerald-400 to-green-800",
  danger: "bg-gradient-to-r from-pink-500 to-red-800",
};
