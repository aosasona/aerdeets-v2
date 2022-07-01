import "../styles/globals.css";
import "../styles/main.css";
import "../styles/nprogress.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "@/context/GlobalContext";

import Router from "next/router";
import nProgress from "nprogress";

//Router events
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
