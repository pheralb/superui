import MySandpack from "@/components/sandpack/editor";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

export default function Labs() {
  return (
    <Box
      as="main"
      w={"100%"}
      mx="auto"
      px={14}
      py={6}
      display="flex"
      flexDirection="column"
      alignItems="start"
    >
      <Heading as="h1" size="2xl" mb={5}>
        SuperUI Labs
      </Heading>
      <Text fontSize="20px" fontWeight="light" mb={5}>
        Here you can create custom SuperUI components and upload them to our
        database.
      </Text>

      <MySandpack />
    </Box>
  );
}
