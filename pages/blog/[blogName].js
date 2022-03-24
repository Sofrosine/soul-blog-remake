import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "../../MDX";
import Layout from "../../components/Layout";

const Blogs = ({ mdxSource, frontMatter }) => {
  return (
    <Layout
      metaKeywords={frontMatter.keywords}
      metaDescription={frontMatter.description}
      metaTitle={frontMatter.title}
      className="flex flex-col items-center pt-8 pb-16"
      title={frontMatter.title}
    >
      <div className="post-wrapper bg-white dark:bg-warmGray shadow-2xl rounded-lg p-4 w-11/12 sm:w-1/2 2xl:w-2/5 flex flex-col items-center">
        <h1>{frontMatter.title}</h1>

        <MDXRemote {...mdxSource} />
      </div>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps = async (context) => {
  const { blogName } = context.params;

  const source = getFileData(blogName);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};
