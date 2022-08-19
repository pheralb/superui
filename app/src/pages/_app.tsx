/* eslint-disable turbo/no-undeclared-env-vars */
import type { AppProps } from "next/app";

// Custom styles & Prism syntax highlighting ->
import "@/styles/globals.css";
import "@/styles/prism.css";
import "@superui/styles/dist/styles/main.css";

// SuperUI Provider ->
import { SuperUIProvider, ToastProvider } from "@superui/styles";

// Chakra UI & Docs Theme ->
import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "@/styles/appTheme";

// NextProgress ->
import NextNProgress from "nextjs-progressbar";

// Layout ->
import Layout from "@/layout";

// Command Palette ->
import Commands from "@/commands";

// Supabase Config ->
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
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
              <Commands />
              <Component {...pageProps} />
            </ToastProvider>
          </Layout>
        </ChakraProvider>
      </SuperUIProvider>
    </UserProvider>
  );
}

export default MyApp;
