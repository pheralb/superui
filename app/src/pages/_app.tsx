/* eslint-disable turbo/no-undeclared-env-vars */
import Script from "next/script";
import type { AppProps } from "next/app";

// Custom styles & Prism syntax highlighting ->
import "@/styles/globals.css";
import "@/styles/prism.css";
import "@superui/styles/dist/styles/main.css";

// SuperUI Provider ->
import { CommandMenu, SuperUIProvider, ToastProvider } from "@superui/styles";

// Chakra UI & Docs Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "@/styles/appTheme";

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
        <ChakraProvider theme={appTheme}>
          <Layout>
            <ToastProvider>
              <CommandMenu />
              <Component {...pageProps} />
            </ToastProvider>
          </Layout>
        </ChakraProvider>
      </SuperUIProvider>
    </>
  );
}

export default MyApp;
