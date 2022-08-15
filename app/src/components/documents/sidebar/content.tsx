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
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex direction="column" as="nav" aria-label="Main Navigation">
        <Box p={5} pt="7">
          <Heading fontSize="18px" mb="3">
            Overview
          </Heading>
          {Overview.map((link) => (
            <SidebarItem key={link.slug} title={link.title} slug={link.slug} />
          ))}
          <Heading fontSize="18px" mb="3" mt="7">
            Components
          </Heading>
          {Components.map((link) => (
            <SidebarItem key={link.slug} title={link.title} slug={link.slug} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
