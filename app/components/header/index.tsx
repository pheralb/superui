import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Container,
  Heading,
  Badge,
  Text,
} from "@chakra-ui/react";

import HeaderMobile from "./mobile";
import { HeaderLinks } from "./links";
import CustomLink from "@/components/link";
import Theme from "@/components/theme";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box pos="sticky" top="0" w="full" bg={bg} borderBottomWidth="1px">
      <Container maxW="98%" py={5}>
        <Flex alignItems="center" justifyContent="space-between">
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
            <Theme />
          </HStack>
          <HeaderMobile />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
