import Layout from "../../components/Layout";
import Timeline from "../../components/Timeline";
import ExperienceJSON from "../../data/experience.json";

const Journey = ({ data }) => {
  return (
    <Layout
      metaKeywords="soultan muhammad albar journey, soultan muhammad albar journey, soultan albar journey, soultanid journey, soultan journey, journey soultan, nextjs journey, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="My Journey"
      metaTitle="My Journey"
      withTitle
      title="Journey"
      className="flex flex-col justify-center items-center flex-1 pb-8"
    >
      {data?.map((item, index) => (
        <Timeline key={index} item={item} />
      ))}
    </Layout>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      data: ExperienceJSON,
    },
  };
}

export default Journey;
