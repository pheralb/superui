import Header from "@/components/header";
import Footer from "@/components/footer";
import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <VStack id="id_layout_vstack" minH="100vh" h="100%">
      <Header />
      {props.children}
      {/* <Footer /> */}
    </VStack>
  );
};

export default Layout;
