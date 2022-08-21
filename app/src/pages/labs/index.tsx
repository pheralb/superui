import CustomLink from "@/components/link";
import { Box, Container, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import {
  User,
  withPageAuth,
  supabaseServerClient,
} from "@supabase/auth-helpers-nextjs";

import { IoCodeOutline } from "react-icons/io5";

export default function Labs({
  user,
  data,
}: {
  user: User;
  data: any[];
  error: string;
}) {
  return (
    <>
      <Box w="full" borderBottomWidth="1px">
        <Container maxW="76%">
          <Box pt="6" pb="6">
            <Text fontSize="2xl">📦 {user.user_metadata.name} components</Text>
          </Box>
        </Container>
      </Box>
      <Container maxW="76%" mt="5">
        <SimpleGrid columns={3} spacing={6}>
          {data.length > 0 &&
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
      </Container>
    </>
  );
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/",
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
