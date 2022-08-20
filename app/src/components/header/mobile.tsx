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
    <Box display={{ base: "inline-flex", md: "none" }}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        variant="ghost"
        icon={<IoArrowDownOutline />}
        onClick={headerNav.onOpen}
      />
      <VStack
        pos="absolute"
        zIndex={1}
        top={0}
        left={0}
        right={0}
        display={headerNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
      >
        <CloseButton aria-label="Close menu" onClick={headerNav.onClose} />
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
      </VStack>
    </Box>
  );
};

export default HeaderMobile;
