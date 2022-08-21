import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { SiTailwindcss, SiTypescript } from "react-icons/si";
import CustomLink from "@/components/link";
import { BiPaint, BiRocket } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { ImRocket } from "react-icons/im";
import { IoAccessibility } from "react-icons/io5";
import Footer from "@/components/footer";
import LandingCard from "@/components/landing/card";

export default function Docs() {
  return (
    <>
      <Box mb="10">
        <Box px={4} py={24} mx="auto">
          <Box
            w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
            textAlign="center"
            mx="auto"
          >
            <Heading
              mb={3}
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="shorter"
            >
              Develop super ⚡️ websites
            </Heading>
            <Text fontSize="2xl" mb="5">
              with customizable React components
            </Text>
            <Center>
              <CustomLink href="/docs/getting-started">
                <HStack borderWidth="1px" p="3" borderRadius="10px">
                  <Text fontWeight="bold">Get Started</Text>
                  <BiRocket size={20} />
                </HStack>
              </CustomLink>
            </Center>
          </Box>
        </Box>
        <Center>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <LandingCard>
              <SiTailwindcss size={40} />
              <Text mt="4">Built with TailwindCSS</Text>
            </LandingCard>
            <LandingCard>
              <SiTypescript size={40} />
              <Text mt="4">Using Typescript</Text>
            </LandingCard>
            <LandingCard>
              <AiOutlineHeart size={40} />
              <Text mt="4">Open Source</Text>
            </LandingCard>
            <LandingCard>
              <ImRocket size={40} />
              <Text mt="4">Production Ready</Text>
            </LandingCard>
            <LandingCard>
              <BiPaint size={40} />
              <Text mt="4">Customizable</Text>
            </LandingCard>
            <LandingCard>
              <IoAccessibility size={40} />
              <Text mt="4">Accessible</Text>
            </LandingCard>
          </SimpleGrid>
        </Center>
      </Box>
      <Footer />
    </>
  );
}
