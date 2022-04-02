import { format } from "date-fns";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import readingTime from "reading-time";
import Layout from "../../components/Layout";
import { getFileData, getPaths } from "../../MDX";

const Blogs = ({ mdxSource, frontMatter }) => {
  const router = useRouter();

  return (
    <Layout
      metaKeywords={frontMatter.keywords}
      metaDescription={frontMatter.description}
      metaTitle={frontMatter.title}
      className="flex flex-col items-center pt-8 pb-16"
      title={frontMatter.title}
    >
      <div className="post-wrapper relative dark:text-white text-blueGray bg-white dark:bg-blueGray shadow-2xl rounded-lg p-4 w-11/12 sm:w-1/2 2xl:w-2/5 flex flex-col items-center">
        <span
          onClick={() => router.back()}
          className="absolute right-4 text-2xl text-blueGray dark:text-white border border-blueGray dark:border-warmGray rounded-sm w-8 h-8 text-center cursor-pointer"
        >
          &times;
        </span>

        <h1>{frontMatter.title}</h1>
        <div className="mb-3">
          <p className="text-sm font-light">
            📅{"  "}
            {format(new Date(frontMatter?.date), "MMMM yyyy")}{" "}
            <span className="ml-2 mr-3">|</span>🌱 {frontMatter?.readingTime}
          </p>
        </div>
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
  const readingTimeVar = readingTime(content).text;
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontMatter: { ...data, readingTime: readingTimeVar },
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
