import type { AppProps } from "next/app";

// Custom styles ->
import "@/styles/globals.css";

// Prism syntax highlighting ->
import "@/styles/prism.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
