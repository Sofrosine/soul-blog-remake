import React from "react";
import Layout from "../components/Layout";
import OnProgress from "../components/OnProgress";

const blog = () => {
  return (
    <Layout
      metaKeywords="soultan muhammad albar blog, soultan albar blog, soultanid blog, soultan blog, blog soultan, nextjs blog, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="Soultan's Blog"
      className="flex justify-center"
      title="Blog"
      withTitle
    >
      <OnProgress />
    </Layout>
  );
};

export default blog;
