import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import Avatar from "boring-avatars";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { IoAdd, IoArrowDown, IoExitOutline } from "react-icons/io5";
import CustomLink from "../link";
import { useRouter } from "next/router";

const Auth = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const { isLoading, user, error } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push("/");
  };

  if (!user)
    return (
      <Button
        fontWeight="light"
        loadingText="Preparing..."
        isLoading={isLoading}
        onClick={() => {
          supabaseClient.auth.signIn({ provider: "github" });
        }}
      >
        Sign in with GitHub
      </Button>
    );

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        fontWeight="light"
        borderWidth="1px"
        rightIcon={<IoArrowDown />}
        leftIcon={
          <Avatar size={20} name={user?.user_metadata?.name} variant="beam" />
        }
      >
        {user?.user_metadata?.name}
      </MenuButton>
      <MenuList bg={bg}>
        <CustomLink href="/labs/create">
          <MenuItem icon={<IoAdd size={16} />} fontWeight="light">
            Create new component
          </MenuItem>
        </CustomLink>
        <MenuDivider />
        <MenuItem icon={<IoExitOutline size={16} />} onClick={handleLogout}>
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Auth;
