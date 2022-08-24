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
      dark: "#171717",
    },
    circle: {
      light: "#F5F5F5",
      dark: "#272525",
    },
    card: {
      light: "#f2f2f2",
      dark: "#2e2e2e",
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
        bgGradient: mode(
          "radial-gradient(circle at 1px 1px, circle.light 1px, bg.light 0)",
          "radial-gradient(circle at 1px 1px, circle.dark 1px, bg.dark 0)"
        )(props),
        backgroundSize: "50px 50px",
        fontSize: "14px",
      },
    }),
  },
});

export default appTheme;
