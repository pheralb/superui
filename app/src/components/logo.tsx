import { ComponentProps, FC } from "react";

const Logo: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="#392299"
      d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4 12.5v-4l2 2 2-2v4h2v-7h-2l-2 2-2-2H5v7h2zm11-3v-4h-2v4h-2l3 3 3-3h-2z"
      className="fill-000000"
    ></path>
  </svg>
);

export default Logo;
