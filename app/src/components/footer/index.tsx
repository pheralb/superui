import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box pos="sticky" top="0" w="full" py="5">
      <Box p={4}>
        <Text fontSize="sm" textAlign="center" color="gray.500">
          💖 Built by pheralb, srdrabx, iKuroTime and TMCheiN.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
