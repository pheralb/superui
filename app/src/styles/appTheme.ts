import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const appTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FBFCFC",
      dark: "#252525",
    },
    focused: {
      light: "#f1f0f0",
      dark: "#1f1e1e",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Cascadia, monospace",
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

export default appTheme;
