import { DispatchWithoutAction, MouseEventHandler, useState } from "react";
import {
  supabaseClient,
  User,
  withPageAuth,
} from "@supabase/auth-helpers-nextjs";
import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import { IoRocketOutline, IoSave } from "react-icons/io5";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("@/components/sandpack/editor"), {
  ssr: false,
});

export default function Labs({
  user,
  data,
  error,
}: {
  user: User;
  data: any;
  error: string;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleSave = async () => {
    if (!title) {
      toast({
        title: "Title is required",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setLoading(true);
      try {
        await supabaseClient
          .from("components")
          .insert({
            title,
            code,
            user_id: user.id,
          })
          .single();
        toast({
          title: "Component successfully saved",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/labs");
      } catch (error) {
        toast({
          title: "An error occurred while saving your component",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    }
  };
  const handlePublish = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    try {
      await handleSave();
      await supabaseClient
        .from("components")
        .update({ published: true })
        .match({
          title,
          code,
          user_id: user.id,
        });
      toast({
        title: "Component successfully published",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "An error occurred while publishing your component",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handlePublish} className="w-full px-6">
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
        <Heading as="h3" size="lg" mb={4}>
          Create new custom component
        </Heading>
        <Text fontWeight="light" mb={5}>
          Create custom SuperUI components and upload them to our database.
        </Text>
        <Editor setCode={setCode as DispatchWithoutAction} />

        <InputGroup my="5">
          <Input
            mb="3"
            placeholder="Title"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            mb="3"
            placeholder="Description"
            size="lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            leftIcon={<IoSave />}
            isLoading={loading}
            loadingText="Saving..."
            variant="solid"
            ml="2"
            fontWeight="light"
            borderWidth="1px"
            size="lg"
            type="button"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            leftIcon={<IoRocketOutline />}
            isLoading={loading}
            loadingText="Publishing..."
            variant="solid"
            ml="2"
            fontWeight="light"
            borderWidth="1px"
            size="lg"
            type="submit"
          >
            Publish
          </Button>
        </InputGroup>
      </Container>
    </form>
  );
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/auth",
});
