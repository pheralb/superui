import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import Avatar from "boring-avatars";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { IoArrowDown, IoExitOutline } from "react-icons/io5";

const Auth = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const { isLoading, user, error } = useUser();
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
          <Avatar size={20} name={user.user_metadata.name} variant="beam" />
        }
      >
        {user.user_metadata.name}
      </MenuButton>
      <MenuList bg={bg}>
        <MenuItem
          icon={<IoExitOutline size={16} />}
          onClick={() => {
            supabaseClient.auth.signOut();
          }}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Auth;
