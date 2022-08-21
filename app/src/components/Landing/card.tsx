import { Box } from "@chakra-ui/react";
import React from "react";

interface LandingCardProps {
  children: React.ReactNode;
}

const LandingCard = (props: LandingCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="5px"
      p="5"
      _hover={{ shadow: "sm", transform: "translateY(-1.4px)" }}
      transition="all 0.2s ease-in-out"
    >
      {props.children}
    </Box>
  );
};

export default LandingCard;
