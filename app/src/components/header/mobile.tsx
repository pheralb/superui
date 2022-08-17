import React from "react";
import {
  Box,
  CloseButton,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IoArrowDownOutline } from "react-icons/io5";
import { HeaderLinks } from "../../data/headerLinks";
import CustomLink from "@/components/link";

const HeaderMobile = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const headerNav = useDisclosure();
  return (
    <div className="inline-flex md:hidden">
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open header menu"
        variant="ghost"
        borderWidth="1px"
        icon={<IoArrowDownOutline />}
        onClick={headerNav.onOpen}
      />
      <div
        className={`flex flex-col absolute items-center z-[1000] top-0 left-0 right-0 ${
          headerNav?.isOpen ? "flex" : "hidden"
        } p-2 py-5 bg-[#FBFCFC] dark:bg-[#252525] border-b gap-5`}
      >
        {HeaderLinks.map((link) => (
          <CustomLink key={link.slug} href={link.slug} external={link.external}>
            {link.title}
          </CustomLink>
        ))}
        <CloseButton
          aria-label="Close Header Menu"
          borderWidth="1px"
          onClick={headerNav.onClose}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
