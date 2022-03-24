import { ThemeProvider } from "next-themes";
import Router from "next/router";
import NProgress from "nprogress";
import { MDXProvider } from "@mdx-js/react";
import "nprogress/nprogress.css";
import "tailwindcss/tailwind.css";
import "../global.css";
import "../styles/tailwind.scss";


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, router, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem="false" attribute="class">
        <MDXProvider>
          <Component key={router.route} {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
