import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Container,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";

import HeaderMobile from "./mobile";
import { HeaderLinks } from "@/data/headerLinks";
import CustomLink from "@/components/link";
import ChangeTheme from "@/components/theme";
import { IoLogoGithub } from "react-icons/io5";
import Auth from "@/components/auth";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box
      bg={bg}
      zIndex={1000}
      pos="sticky"
      top="0"
      w="full"
      px={{ base: 2, sm: 4 }}
      py={6}
      borderBottomWidth="1px"
    >
      <Container maxW="76%">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <CustomLink href="/" external={false}>
            <HStack spacing={3}>
              <Image src="/img/superui.png" height="25px" />
              <Text fontSize="16px" fontWeight="semibold" ml="2">
                SuperUI
              </Text>
            </HStack>
          </CustomLink>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={8}
              mr={5}
              display={{ base: "none", md: "inline-flex" }}
            >
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
              <HStack spacing={4}>
                <Auth />
                <CustomLink
                  href="https://github.com/pheralb/superui"
                  underline={true}
                >
                  <Icon as={IoLogoGithub} boxSize={25} />
                </CustomLink>
                <ChangeTheme />
              </HStack>
            </HStack>
            <HeaderMobile />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
