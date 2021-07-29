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

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="description" content={description}></meta>
          <meta charset="UTF-8"></meta>
          <title>{title}</title>

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          <meta name="keywords" content={keywords} />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Soultan Muhammad Albar" />
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
