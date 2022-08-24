import CustomLink from "@/components/link";
import { Card } from "@/components/home/index";
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  User,
  withPageAuth,
  supabaseServerClient,
} from "@supabase/auth-helpers-nextjs";

import { IoAdd, IoCodeOutline } from "react-icons/io5";

export default function Labs({
  user,
  data,
}: {
  user: User;
  data: any[];
  error: string;
}) {
  return (
    <VStack w="full" h="full" flexGrow="1">
      <Box w="full" borderBottomWidth="1px">
        <Container maxW="76%">
          <Box pt="6" pb="6">
            <Text fontSize="2xl">
              📦 {user?.user_metadata?.name} components
            </Text>
          </Box>
        </Container>
      </Box>
      <Center w="full" h="full" flexGrow="1">
        <Container maxW="76%" h="full" flexGrow="1">
          <SimpleGrid columns={3} spacing={6}>
            {data?.length > 0 &&
              data.map((item) => (
                <CustomLink href={`/labs/${item.id}`} key={item.id}>
                  <Box
                    borderWidth="1px"
                    borderRadius="5px"
                    p="4"
                    cursor="pointer"
                    _hover={{
                      shadow: "sm",
                    }}
                  >
                    <HStack spacing={2}>
                      <IoCodeOutline size={22} />
                      <Text fontSize="2xl">{item.title}</Text>
                    </HStack>
                  </Box>
                </CustomLink>
              ))}
          </SimpleGrid>
          <Center>
            <Card>
              <VStack gap={3} textAlign="center">
                <Text>
                  Looks like you don't have any component created yet! 🤔
                </Text>
                <Text>Try to:</Text>
                <CustomLink href="/labs/create">
                  <Button leftIcon={<IoAdd size={16} />} fontWeight="light">
                    Create a new component
                  </Button>
                </CustomLink>
              </VStack>
            </Card>
          </Center>
        </Container>
      </Center>
    </VStack>
  );
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/auth",
  async getServerSideProps(ctx) {
    const { data } = await supabaseServerClient(ctx)
      .from("components")
      .select("*");
    return {
      props: {
        data,
      },
    };
  },
});
