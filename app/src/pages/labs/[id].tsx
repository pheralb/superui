import { DispatchWithoutAction, useEffect, useState } from "react";
import {
  User,
  withPageAuth,
  supabaseServerClient,
  supabaseClient,
  getUser,
} from "@supabase/auth-helpers-nextjs";
import {
  Button,
  Container,
  HStack,
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
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import { IoRocketOutline, IoTrashOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { GetServerSidePropsContext, PreviewData, NextApiRequest } from "next";
import { ParsedUrlQuery } from "querystring";

const Editor = dynamic(() => import("@/components/sandpack/editor"), {
  ssr: false,
});

export default function Labs({
  user,
  data,
  id,
  should_display,
  user_metadata,
}: {
  should_display: boolean;
  user: User;
  data: any;
  error: string;
  id: string;
  user_metadata: any;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

  useEffect(() => {
    console.log(user_metadata);
  }, []);

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
      <Text fontSize="24" mb="2">
        {user_metadata?.user_name}/{data?.title}
      </Text>
      <VStack w="full">
        {should_display && (
          <VStack w="full" py="10">
            <HStack w="full" alignItems="center" justifyContent="center">
              <Input
                placeholder={data?.title}
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
            </HStack>
            <Textarea
              mb="3"
              placeholder={data?.description || "Description"}
              size="lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </VStack>
        )}
        <Editor
          setCode={setCode as DispatchWithoutAction}
          defaultCode={data?.code || null}
        />
      </VStack>
    </Container>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  const { id } = ctx.query;
  const { user } = await getUser(ctx);
  let should_display = false;
  const userData = await supabaseServerClient(ctx)
    .from("components")
    .select("id,user_id")
    .eq("id", id)
    .match({ user_id: user?.id });

  const { data } = await supabaseServerClient(ctx)
    .from("components")
    .select("*")
    .eq("id", id)
    .single();

  const user_metadata = await supabaseServerClient(ctx)
    .from("users")
    .select("raw_user_meta_data")
    .eq("id", data.user_id);

  if (userData.data) {
    should_display = userData?.data?.length > 0 ? true : false;
  }
  return {
    props: {
      id,
      data,
      user,
      should_display,
      user_metadata: JSON.parse(user_metadata?.data![0]?.raw_user_meta_data),
    },
  };
}
