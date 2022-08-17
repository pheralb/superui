import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";

const ChangeTheme = () => {
  const { toggleColorMode } = useColorMode();
  const key = useColorModeValue("light", "dark");
  const icon = useColorModeValue(<BiMoon size={20} />, <BiSun size={20} />);
  return (
    <IconButton
      variant="ghost"
      size="sm"
      aria-label={`${key} theme`}
      icon={icon}
      onClick={toggleColorMode}
    />
  );
};

export default ChangeTheme;
