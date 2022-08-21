import CustomLink from "@/components/link";
import {
  Box,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Overview, Components } from "@/data/sidebarLinks";
import SidebarItem from "./item";

interface SidebarContentProps {
  display?: object;
  width?: string;
  borderRight?: string;
}

const SidebarContent = (props: SidebarContentProps) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="240px"
      {...props}
    >
      <Flex direction="column" as="nav" aria-label="Main Navigation">
        <Box p={5} pt="10">
          <Heading fontSize="18px" mb="3">
            Overview
          </Heading>
          {Overview.map((link) => (
            <SidebarItem
              key={link.slug}
              title={link.title}
              slug={link.slug}
              external={link.external}
            />
          ))}
          <Heading fontSize="18px" mb="3" mt="7">
            Components
          </Heading>
          {Components.map((link) => (
            <SidebarItem
              key={link.slug}
              title={link.title}
              slug={link.slug}
              external={link.external}
            />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
