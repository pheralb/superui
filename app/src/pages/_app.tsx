/* eslint-disable turbo/no-undeclared-env-vars */
import Script from "next/script";
import type { AppProps } from "next/app";

// Custom styles ->
import "@/styles/globals.css";

// SuperUI Provider ->
import { SuperUIProvider } from "superui";

// Chakra UI & Docs Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import docsTheme from "@/styles/docsTheme";

// Prism syntax highlighting ->
import "@/styles/prism.css";

// Layout ->
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SuperUIProvider>
      <ChakraProvider theme={docsTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SuperUIProvider>
  );
}

export default MyApp;
