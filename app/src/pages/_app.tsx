import type { AppProps } from "next/app";

// Styles =>
import "@/styles/globals.css";

// Layout =>
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
