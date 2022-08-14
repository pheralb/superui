/* eslint-disable turbo/no-undeclared-env-vars */
import type { AppProps } from "next/app";

// Custom styles ->
import "@/styles/globals.css";

// Chakra UI & Docs Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import docsTheme from "@/styles/docsTheme";

// Prism syntax highlighting ->
import "@/styles/prism.css";
import Head from "next/head";
import { SuperUIProvider } from "superui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SuperUIProvider>
      <ChakraProvider theme={docsTheme}>
        <Head>
          {process.env.NODE_ENV === "development" && (
            <script src="https://cdn.tailwindcss.com" defer />
          )}
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </SuperUIProvider>
  );
}

export default MyApp;
