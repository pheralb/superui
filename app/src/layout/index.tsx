import Header from "@/components/header";
import Footer from "@/components/footer";
import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <VStack>
      <Header />
      <Box mx={10}>{props.children}</Box>
      <Footer />
    </VStack>
  );
};

export default Layout;
