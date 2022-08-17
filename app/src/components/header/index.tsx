import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Container,
  Heading,
  Text,
  Kbd,
} from "@chakra-ui/react";

import HeaderMobile from "./mobile";
import { HeaderLinks } from "@/data/headerLinks";
import CustomLink from "@/components/link";
import Theme from "@/components/theme";

const Header = () => {
  return (
    <div className="sticky top-0 w-full bg-[#FBFCFC] dark:bg-[#252525] border-b z-10">
      <div className="flex w-full py-5 justify-evenly">
        <div className="flex items-center justify-around w-full">
          <CustomLink href="/" external={false}>
            <div className="flex gap-3">
              <span className="text-xl">SuperUI</span>
              <span className="text-gray-400">beta</span>
            </div>
          </CustomLink>
          <div className="hidden gap-5 md:inline-flex item-center">
            <div className="flex gap-8 mr-1">
              {HeaderLinks.map((link) => (
                <CustomLink
                  key={link.slug}
                  href={link.slug}
                  external={link.external}
                  underline={true}
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
          </div>
          <div className="hidden gap-5 md:inline-flex">
            <span>
              <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
            </span>
            <Theme />
          </div>
          <HeaderMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
