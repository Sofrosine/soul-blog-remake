import React from "react";
import CardPortfolio from "../../components/CardPortfolio";
import Layout from "../../components/Layout";
import OnProgress from "../../components/OnProgress";
import PortofolioJson from "../../data/portofolio.json";

const Portfolio = () => {
  return (
    <Layout
      metaKeywords="soultan muhammad albar portfolio, soultan albar portfolio, soultanid portfolio, soultan portfolio, portfolio soultan, nextjs portfolio, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="My Portfolio"
      metaTitle="My Portfolio"
      withTitle
      title="Portfolio"
      className="flex flex-col items-center pt-8 pb-16"
    >
      {PortofolioJson?.map((item, index) => {
        return (
          <div key={index} className="mb-8 w-11/12 sm:w-2/3 2xl:w-2/5 card-blog-parent">
            <CardPortfolio item={item} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Portfolio;
