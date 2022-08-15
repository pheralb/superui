import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const docsTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FBFCFC",
      dark: "#131314",
    },
    focused: {
      light: "#f1f0f0",
      dark: "#1f1e1e",
    },
  },
  fonts: {
    body: "Inter-Regular, sans-serif",
    heading: "Inter-Medium, sans-serif",
  },
  styles: {
    global: (props: ChakraProps) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        bg: mode("bg.light", "bg.dark")(props),
        fontSize: "14px",
      },
    }),
  },
});

export default docsTheme;
