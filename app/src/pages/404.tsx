import React from "react";
import CustomLink from "@/components/link";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Error404 = () => {
  return (
    <Center flexGrow={1}>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading as="h1" size="xl">
          🤔
        </Heading>
        <Heading mb="2" mt="4">
          Error 404
        </Heading>
        <Text mb="3">The page you are trying to access does not exist.</Text>
        <CustomLink href="/">
          <Box p="2" borderWidth="1px" borderRadius="10px">
            Go home
          </Box>
        </CustomLink>
      </Flex>
    </Center>
  );
};

export default Error404;
