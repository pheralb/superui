import { NavigationProps } from "./navigation.types";
import { twMerge } from "tailwind-merge";

export const NavigationBar = ({
  variant = "primary",
  className,
  children,
  logo,
  ...props
}: NavigationProps) => {
  const generateClassName = twMerge(
    BASE_STYLES,
    HEADER_STYLES[variant].main,
    className
  );
  return (
    <nav className={generateClassName} {...props}>
      {logo && <img className="max-h-16" src={logo} alt="logo" />}
      <div className={HEADER_STYLES[variant].children}>{children}</div>
    </nav>
  );
};

const BASE_STYLES =
  "w-full h-fit px-2 sm:px-16 py-2 flex items-center border-b-2 flex-wrap";

const HEADER_STYLES = {
  primary: {
    main: "justify-center gap-6 sm:gap-0",
    children: "m-auto",
  },
  secondary: {
    main: "justify-between",
    children: "m-auto sm:m-0",
  },
};
