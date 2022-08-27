import React from "react";
import Sidebar from "@/components/documents/sidebar";
import { Components } from "@/data/sidebarLinks";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CustomLink from "@/components/link";

interface ComponentInterface {
  title: string;
  slug: string;
  external: boolean;
}

const Docs = () => {
  return (
    <Sidebar>
      <Heading mb={7} fontSize="3xl">
        👋 Welcome
      </Heading>
      <SimpleGrid minChildWidth="240px" spacing={6}>
        {Components.map(({ title, slug, external }: ComponentInterface) => {
          return (
            <CustomLink href={`${slug}`} key={slug}>
              <Box
                borderWidth="1px"
                borderRadius="5px"
                p="4"
                _hover={{
                  boxShadow: "0px 0px 10px rgba(234, 234, 234, 0.1)",
                }}
              >
                <Text fontSize="2xl">{title}</Text>
                <Text color="gray.500" fontSize="12px">
                  {slug}
                </Text>
              </Box>
            </CustomLink>
          );
        })}
      </SimpleGrid>
    </Sidebar>
  );
};

export default Docs;
