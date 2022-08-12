import type { AppProps } from "next/app";

// Chakra UI & custom styles ->
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
