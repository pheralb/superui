import Header from "@/components/header";
import { Box } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <Box mx={10} my={4}>
        {props.children}
      </Box>
    </>
  );
};

export default Layout;
