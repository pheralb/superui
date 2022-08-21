import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoCloudOutline, IoLogoGithub } from "react-icons/io5";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleSignIn = () => {
    setLoading(true);
    supabaseClient.auth.signIn({ provider: "github" });
  };

  if (user) {
    router.push("/");
  }

  return (
    <Center mt="14">
      <Box textAlign="center" borderWidth="1px" borderRadius="10px" p="10">
        <Center>
          <IoCloudOutline size={30} />
        </Center>
        <Heading mb="2" mt="5">
          Sign In
        </Heading>
        <Text mb="5">Sign in to access SuperUI Labs</Text>
        <Button
          borderWidth="1px"
          leftIcon={<IoLogoGithub size={16} />}
          fontWeight="light"
          loadingText="Loading..."
          isLoading={loading}
          onClick={handleSignIn}
        >
          Sign in with GitHub
        </Button>
      </Box>
    </Center>
  );
};

export default SignIn;
