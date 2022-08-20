import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  VStack,
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
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box pos="sticky" top="0" w="full" bg={bg} borderTopWidth="1px">
      <Container maxW="98%" py={10}>
        <Flex
          alignItems="center"
          gap={10}
          flexDirection="column"
          justifyContent="space-around"
        >
          <CustomLink href="/" external={false}>
            <HStack spacing={3}>
              <Heading fontSize="18px">SuperUI</Heading>
              <Text color="gray.400">beta</Text>
            </HStack>
          </CustomLink>
          <HStack
            display={{ base: "none", md: "inline-flex" }}
            alignItems="center"
            spacing={5}
          >
            <HStack spacing={8} mr={1}>
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
            </HStack>
          </HStack>
          <HeaderMobile />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
