import React from "react";
import Layout from "../components/Layout";
import Timeline from "../components/Timeline";
import ExperienceJSON from "../data/experience.json";

const Journey = () => {
  return (
    <Layout
      metaKeywords="soultan, soultan muhammad albar, soultan muhammad albar journey, soultan albar journey, soultanid journey, soultan journey, journey soultan, nextjs journey, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="My Journey"
      metaTitle="My Journey"
      withTitle
      title="Journey"
      className="flex flex-col justify-center items-center flex-1 pb-8"
    >
      {ExperienceJSON.map((item, index) => (
        <Timeline key={index} item={item} />
      ))}
    </Layout>
  );
};

export default Journey;
