import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";

const Theme = () => {
  const { toggleColorMode } = useColorMode();
  const key = useColorModeValue("light", "dark");
  const icon = useColorModeValue(<BiMoon size={20} />, <BiSun size={20} />);
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={key}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={toggleColorMode}
      >
        <IconButton
          variant="ghost"
          size="sm"
          aria-label={`${key} theme`}
          icon={icon}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Theme;
