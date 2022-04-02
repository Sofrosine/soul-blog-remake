import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { getBlogs } from "../MDX";

const CardBlog = dynamic(() => import("../components/CardBlog"), {
  loading: () => <Loader />,
});

const blog = ({ blogs }) => {
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
            <CardBlog index={index} item={item} />
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
