import React from "react";
import Layout from "../components/Layout";
import Timeline from "../components/Timeline";
import ExperienceJSON from "../data/experience.json";

const Experience = () => {
  return (
    <Layout
      metaKeywords="soultan, soultan muhammad albar, soultan muhammad albar experience, soultan albar experience, soultanid experience, soultan experience, experience soultan, nextjs experience, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="My Experience"
      metaTitle="My Experience"
      withTitle
      title="Experience"
      className="flex flex-col justify-center items-center flex-1 pb-8"
    >
      {ExperienceJSON.map((item, index) => (
        <Timeline key={index} item={item} />
      ))}
    </Layout>
  );
};

export default Experience;
