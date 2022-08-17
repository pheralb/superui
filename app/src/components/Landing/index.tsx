import {
  Center,
  Button,
  VStack,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  children?: React.ReactNode;
};
export function Card(props: Props) {
  const cardBg = useColorModeValue("card.light", "card.dark");

  return (
    <div className="grid place-content-center w-full max-w-xs bg-[#FBFCFC] dark:bg-[#2e2e2e] rounded-xl">
      <div className="flex flex-col p-8">{props.children}</div>
    </div>
  );
}

export function CTA() {
  return (
    <div className="grid w-screen h-screen place-content-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-bold text-center text-7xl">
          Develop super ⚡️ websites <br />
          with customizable React
          <br />
          components
        </h1>
        <div className="flex gap-5 mt-8">
          <button className="p-3 px-5 font-bold transition-colors bg-green-500 rounded-full hover:bg-green-600">
            Get Started 🚀
          </button>
          <button className="flex items-center gap-2 p-3 px-5 font-bold transition-colors rounded-full bg-neutral-500">
            View on Github <AiFillGithub className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ComponentSection() {
  return (
    <div className="h-80">
      <div className="grid place-content-center max-w-md w-full h-80 bg-[#FBFCFC] p-10 dark:bg-[#2e2e2e] rounded-xl">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-left">
            Customizable components built with Tailwind CSS
          </h2>
          <p className="text-xl">
            Select your desired components and include them in your projects in
            just a click
          </p>
        </div>
      </div>
    </div>
  );
}

export function ComponentGrid() {
  const cardBg = useColorModeValue("card.light", "card.dark");

  return (
    <div className="flex flex-col items-center h-fit py-36 w-[80%]">
      <div className="max-w-[1000px] bg-[#f2f2f2] dark:bg-[#2e2e2e] rounded-lg mb-2 p-5">
        <h2 className="text-5xl font-bold text-center">
          XX production-ready components
        </h2>
      </div>
      <div className="grid place-items-center max-w-[100vw] w-full h-screen grid-cols-2 grid-rows-3 gap-8 mt-10">
        <Card>Component 1</Card>
        <Card>Component 2</Card>
        <Card>Component 3</Card>
        <Card>Component 4</Card>
        <Card>Component 5</Card>
        <Card>Component 6</Card>
      </div>
    </div>
  );
}
