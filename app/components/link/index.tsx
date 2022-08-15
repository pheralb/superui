import React from "react";
import NextLink from "next/link";
import { Icon, Link } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

interface CustomLinksProps {
  href: string;
  underline?: boolean;
  children: React.ReactNode;
  external?: boolean;
}

const CustomLink = (props: CustomLinksProps) => {
  return (
    <NextLink href={props.href} passHref>
      <Link
        isExternal={props.external}
        _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
      >
        {props.children}
        {props.external && <Icon as={HiOutlineExternalLink} ml={1} />}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
