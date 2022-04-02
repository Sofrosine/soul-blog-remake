import Head from "next/head";

const defaultTitle = "Soultan | Mobile Engineer";
const defaultDesc =
  "A Mobile Engineer who is persistent on solving problems and easy to learn a new thing. Experienced on React Native for almost 2 years";
const defaultImage = "https://avatars.githubusercontent.com/u/54109543?v=4";
const defaultUrl = "https://soultan.id";
const defaultKeyword =
  "soultan, soultanid, soultan.id, soultan albar, soultan muhammad, soultan muhammad albar, soultan albar, sofrosine, programmer, react native developer";

const Meta = ({
  title = defaultTitle,
  description = defaultDesc,
  url = defaultUrl,
  image = defaultImage,
  keywords = defaultKeyword,
}) => {
  return (
    <Head>
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
  );
};

export default Meta;
