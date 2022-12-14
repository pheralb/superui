import CustomLink from "@/components/link";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface SidebarItemProps {
  title: string;
  slug: string;
  external?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  const router = useRouter();
  const { slug } = router.query;
  const isActive = `/docs/${slug}` === props.slug;
  const focused = useColorModeValue("focused.light", "focused.dark");

  return (
    <CustomLink key={props.slug} href={props.slug} external={props.external}>
      <Flex
        direction="column"
        p="2"
        _hover={{
          backgroundColor: focused,
        }}
        bg={isActive ? focused : ""}
        transition="all 0.2s ease-in-out"
        borderRadius="10px"
        mb="1"
      >
        {props.title}
      </Flex>
    </CustomLink>
  );
};

export default SidebarItem;
