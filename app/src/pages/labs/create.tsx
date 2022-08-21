import { DispatchWithoutAction, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import { IoRocketOutline } from "react-icons/io5";
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
  const [code, setCode] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handlePublish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          title: "Component successfully created",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/labs");
      } catch (error) {
        toast({
          title: "An error occurred while publishing your component",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handlePublish}>
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
          Here you can create custom SuperUI components and upload them to our
          database.
        </Text>

        <InputGroup>
          <Input
            mb="3"
            placeholder="Title"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
        <Editor setCode={setCode as DispatchWithoutAction} />
      </Container>
    </form>
  );
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/",
});
