import NextLink from "next/link";

// Components for MDX =>
import { AvatarDemo, AvatarGroupDemo } from "./avatar";
import ButtonDemo, { ButtonWithIcon, CustomButton } from "./button";
import ButtonGroup from "./buttonGroup";
import CheckboxDemo from "./checkbox";
import { BasicInput, InForm, InputWithLabel } from "./input";
import { PinCodeDemo } from "./pinCode";
import { CircularProgressDemo, LinearProgressDemo } from "./progress";

export const MDXComponents = {
  Button: () => <ButtonDemo />,
  ButtonWithIcon: () => <ButtonWithIcon />,
  CustomButton: () => <CustomButton />,
  BasicInput: () => <BasicInput />,
  InputWithLabel: () => <InputWithLabel />,
  InForm: () => <InForm />,
  AvatarDemo: () => <AvatarDemo />,
  AvatarGroupDemo: () => <AvatarGroupDemo />,
  CheckboxDemo: () => <CheckboxDemo />,
  PinCodeDemo: () => <PinCodeDemo />,
  ButtonGroupDemo: () => <ButtonGroup />,
  LinearProgressDemo: () => <LinearProgressDemo />,
  CircularProgressDemo: () => <CircularProgressDemo />,
};
