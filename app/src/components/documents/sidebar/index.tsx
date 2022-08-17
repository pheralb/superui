import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarContent from "./content";
import { CgStack } from "react-icons/cg";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  const sidebar = useDisclosure();
  return (
    <Box borderTopWidth="1px">
      <Container maxW="77%" as="section">
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent width="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: "300px" }} transition=".3s ease">
          <Button
            variant="ghost"
            borderWidth="1px"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            leftIcon={<CgStack />}
            w="100%"
            mt="2"
          >
            Documents
          </Button>
          <Box as="main" pt={{ base: "6", md: "10" }}>
            {props.children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Sidebar;
