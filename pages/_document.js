import Document, { Html, Head, Main, NextScript } from "next/document";

const title = "Soultan | React Native Developer";
const description =
  "A React Native Developer who is persistent on solving problems and easy to learn a new thing. Experienced on React Native for almost 2 years";
const image = "https://avatars.githubusercontent.com/u/54109543?v=4";
const url = "https://soultan.id";
const keywords =
  "soultan, soultanid, soultan.id, soultan albar, soultan muhammad, soultan muhammad albar, soultan albar, sofrosine, programmer, react native developer";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="application-name" content="SoultanId" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="SoultanId" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#fafafa" />
          <meta name="theme-color" content="#fafafa" />
        </Head>
        <body className="font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
