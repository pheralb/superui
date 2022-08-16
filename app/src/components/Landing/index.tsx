import {
  Center,
  Button,
  VStack,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  children?: React.ReactNode;
};
export function Card(props: Props) {
  return (
    <Center w="100%" maxH={350} bgColor="#2e2e2e" rounded={20}>
      <VStack p={8}>{props.children}</VStack>
    </Center>
  );
}

export function CTA({}: Props) {
  return (
    <Center height="90vh" w="100vw">
      <VStack spacing={8}>
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          fontWeight={700}
        >
          Develop super ⚡️ websites <br />
          with customizable React
          <br />
          components
        </Heading>
        <HStack spacing={5} mt={8}>
          <Button colorScheme="green" size="lg">
            Get Started 🚀
          </Button>
          <Button size="lg" rightIcon={<AiFillGithub />}>
            View on Github
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}

export function ComponentSection() {
  return (
    <Center h={350}>
      <Center maxW={500} h={300} bgColor="#2e2e2e" rounded={20}>
        <VStack p={8}>
          <Heading
            as="h2"
            size={{ base: "2xl" }}
            fontWeight={900}
            noOfLines={3}
            lineHeight={1.2}
          >
            Customizable components built with Tailwind CSS
          </Heading>
          <Text as="p" fontSize="xl" fontWeight={500} noOfLines={3}>
            Select your desired components and include them in your projects in
            just a click
          </Text>
        </VStack>
      </Center>
    </Center>
  );
}

export function ComponentGrid({}: Props) {
  return (
    <VStack h={1550} pt={150} w="80%">
      <Center maxW={1000} bgColor="#2e2e2e" rounded={20} mb={10}>
        <VStack p={5}>
          <Heading
            as="h2"
            size={{ base: "2xl" }}
            fontWeight={900}
            noOfLines={3}
            lineHeight={1.2}
          >
            XX production-ready components
          </Heading>
        </VStack>
      </Center>
      <div className="grid maxW-[100vw] w-full h-full grid-cols-2 grid-rows-3 gap-8 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Center maxW={1000} maxH={350} w="100%" bgColor="#2e2e2e" rounded={20}>
          <VStack p={8}></VStack>
        </Center>
      </div>
    </VStack>
  );
}
