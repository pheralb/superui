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
import { HeaderLinks } from "./links";
import CustomLink from "@/components/link";

const HeaderMobile = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const headerNav = useDisclosure();
  return (
    <Box display={{ base: "inline-flex", md: "none" }}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open header menu"
        variant="ghost"
        borderWidth="1px"
        icon={<IoArrowDownOutline />}
        onClick={headerNav.onOpen}
      />
      <HStack
        pos="absolute"
        justifyContent="center"
        zIndex={1000}
        top={0}
        left={0}
        right={0}
        display={headerNav.isOpen ? "flex" : "none"}
        p={2}
        py={5}
        bg={bg}
        borderWidth="1px"
        spacing={5}
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
      </HStack>
    </Box>
  );
};

export default HeaderMobile;
