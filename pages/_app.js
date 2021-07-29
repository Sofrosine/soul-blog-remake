import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "tailwindcss/tailwind.css";
import "../global.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, router, pageProps }) {
  return <Component key={router.route} {...pageProps} />;
}

export default MyApp;
