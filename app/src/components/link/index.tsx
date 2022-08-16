import React from "react";
import NextLink from "next/link";
import { Icon, Link } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useRouter } from "next/router";

interface CustomLinksProps {
  href: string;
  mb?: string;
  mt?: string;
  textAlign?: string;
  underline?: boolean;
  children: React.ReactNode;
  external?: boolean;
}

const CustomLink = (props: CustomLinksProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === props.href;
  return (
    <NextLink href={props.href} passHref>
      <Link
        isExternal={props.external}
        fontWeight={isActive ? "bold" : "normal"}
        _hover={{ textDecoration: "none", transform: "translateY(-1px)" }}
      >
        {props.children}
        {props.external && <Icon as={HiOutlineExternalLink} ml={1} />}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
