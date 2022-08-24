import { Card } from "@/components/home";
import CustomLink from "@/components/link";
import {
  VStack,
  HStack,
  Button,
  SimpleGrid,
  Center,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { supabaseServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext, PreviewData, NextApiRequest } from "next";
import { ParsedUrlQuery } from "querystring";

import React, { useState } from "react";
import { IoAdd, IoCodeOutline } from "react-icons/io5";

export default function Community({ data }: { data: any[] }) {
  return (
    <VStack w="full" h="full" flexGrow="1">
      <Box w="full" borderBottomWidth="1px">
        <Container maxW="76%">
          <HStack pt="6" pb="6" justifyContent="space-around">
            <Text fontSize="2xl">📦 Community components</Text>
            <CustomLink href="/labs/create">
              <Button leftIcon={<IoAdd size={16} />} fontWeight="light">
                Create a new component
              </Button>
            </CustomLink>
          </HStack>
        </Container>
      </Box>
      {data?.length > 0 ? (
        data.map((item: { id: string; title: string }) => (
          <Box key={item?.id} w="full" h="full" flexGrow="1" p="2">
            <Container maxW="76%" h="full" flexGrow="1">
              <SimpleGrid columns={3} spacing={6}>
                <CustomLink href={`/labs/${item?.id}`} key={item?.id}>
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
              </SimpleGrid>
            </Container>
          </Box>
        ))
      ) : (
        <Center w="full" h="full" flexGrow="1" p="2">
          <Container maxW="76%" h="full" flexGrow="1">
            <Center>
              <Card>
                <VStack gap={3} textAlign="center">
                  <Text>There's no components 😱</Text>
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
      )}
    </VStack>
  );
}

export async function getServerSideProps(ctx: any) {
  const { data, error } = await supabaseServerClient(ctx)
    .from("components")
    .select("*")
    .eq("published", "true");
  console.log("data: ", data);
  console.log("error: ", error);
  return {
    props: {
      data,
    },
  };
}
