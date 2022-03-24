import React from "react";
import Layout from "../components/Layout";
import CardBlog from "../components/CardBlog";
import PortofolioJson from "../data/portofolio.json";
import { getBlogs } from "../MDX";

const blog = ({blogs}) => {
  return (
    <Layout
      metaKeywords="soultan muhammad albar blog, soultan muhammad albar blog, soultan albar blog, soultanid blog, soultan blog, blog soultan, nextjs blog, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="Soultan's Blog"
      metaTitle="Soultan's Blog"
      className="flex flex-col items-center pt-8 pb-16"
      title="Blog"
      withTitle
    >
      {blogs?.map((item, index) => {
        return (
          <div
            key={index}
            className="mb-8 w-11/12 sm:w-2/3 2xl:w-2/5 card-blog-parent"
          >
            <CardBlog item={item} />
          </div>
        );
      })}
    </Layout>
  );
};
export const getStaticProps = () => {
  const blogs = getBlogs();

  return {
    props: {
      blogs,
    },
  };
};

export default blog;
