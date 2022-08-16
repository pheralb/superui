/* eslint-disable turbo/no-undeclared-env-vars */
import Script from "next/script";
import type { AppProps } from "next/app";

// Custom styles & Prism syntax highlighting ->
import "@/styles/globals.css";
import "@/styles/prism.css";

// SuperUI Provider ->
import { SuperUIProvider, CommandMenu } from "superui";

// Chakra UI & Docs Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import docsTheme from "@/styles/docsTheme";

// NextProgress ->
import NextNProgress from "nextjs-progressbar";

// Layout ->
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#4343E5"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <SuperUIProvider>
        <ChakraProvider theme={docsTheme}>
          <Layout>
            <CommandMenu />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SuperUIProvider>
    </>
  );
}

export default MyApp;
