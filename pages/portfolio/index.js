import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import PortofolioJson from "../../data/portofolio.json";

const CardPortfolio = dynamic(() => import("../../components/CardPortfolio"), {
  loading: () => <Loader />,
});

const Portfolio = ({ portfolio }) => {
  return (
    <Layout
      metaKeywords="soultan muhammad albar portfolio, soultan albar portfolio, soultanid portfolio, soultan portfolio, portfolio soultan, nextjs portfolio, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="My Portfolio"
      metaTitle="My Portfolio"
      withTitle
      title="Portfolio"
      className="flex flex-col items-center pt-8 pb-16"
    >
      {portfolio?.map((item, index) => {
        return (
          <div
            key={index}
            className="mb-8 w-11/12 sm:w-2/3 2xl:w-2/5 card-blog-parent"
          >
            <CardPortfolio index={index} item={item} />
          </div>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = () => {
  const portfolio = PortofolioJson;

  return {
    props: {
      portfolio,
    },
  };
};

export default Portfolio;
