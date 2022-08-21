import { DispatchWithoutAction, useState } from "react";
import {
  User,
  withPageAuth,
  supabaseServerClient,
  supabaseClient,
} from "@supabase/auth-helpers-nextjs";
import {
  Button,
  Container,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import { IoRocketOutline, IoTrashOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("@/components/sandpack/editor"), {
  ssr: false,
});

export default function Labs({
  data,
  id,
}: {
  user: User;
  data: any;
  error: string;
  id: string;
}) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgModal = useColorModeValue("bg.light", "bg.dark");
  const router = useRouter();
  const toast = useToast();

  const deleteComponent = async () => {
    setLoading(true);
    onClose();
    try {
      await supabaseClient.from("components").delete().eq("id", id);
      toast({
        title: "Component successfully deleted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/labs");
    } catch (e) {
      toast({
        title: "An error occurred while deleting the component.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const updateComponent = async () => {
    setLoading(true);
    try {
      await supabaseClient
        .from("components")
        .update({ title: title, code: code })
        .eq("id", id);
      toast({
        title: "Component successfully updated",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "An error occurred while updating the component.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const DeleteModal = () => {
    return (
      <>
        <Button
          onClick={onOpen}
          leftIcon={<IoTrashOutline />}
          variant="ghost"
          colorScheme="red"
          ml="2"
          fontWeight="light"
          borderWidth="1px"
          size="lg"
        >
          Delete
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={bgModal}>
            <ModalHeader fontWeight="light">Delete component</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to remove the component?</Text>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} fontWeight="light" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                colorScheme="red"
                fontWeight="light"
                onClick={deleteComponent}
              >
                Remove
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <Container
      maxW={{ base: "100%", md: "95%" }}
      as="main"
      mt="3"
      mx="auto"
      px={14}
      py={6}
      display="flex"
      flexDirection="column"
      alignItems="start"
    >
      <InputGroup>
        <Input
          mb="3"
          placeholder="Title"
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DeleteModal />
        <Button
          onClick={updateComponent}
          leftIcon={<IoRocketOutline />}
          isLoading={loading}
          loadingText="Updating..."
          variant="solid"
          ml="2"
          fontWeight="light"
          borderWidth="1px"
          size="lg"
        >
          Update
        </Button>
      </InputGroup>

      <Editor
        setCode={setCode as DispatchWithoutAction}
        defaultCode={data?.code || null}
      />
    </Container>
  );
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/auth",
  async getServerSideProps(ctx) {
    const { id } = ctx.query;
    const { data } = await supabaseServerClient(ctx)
      .from("components")
      .select("*")
      .eq("id", id)
      .single();
    return {
      props: {
        id,
        data,
      },
    };
  },
});
