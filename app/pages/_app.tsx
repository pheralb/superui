import type { AppProps } from "next/app";

// Custom styles ->
import "@/styles/globals.css";

// Chakra UI & Docs Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import docsTheme from "@/styles/docsTheme";

// Prism syntax highlighting ->
import "@/styles/prism.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={docsTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
