import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout
      metaKeywords="soultan muhammad albar web, soultan albar web, soultanid web, soultan web, web soultan, nextjs web, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="Webnya Soultan"
      metaTitle="Soultan | Mobile Engineer"
      title="soultanid"
      className="flex flex-col md:flex-row justify-center items-center"
    >
      <Image
        className="rounded-full shadow"
        src="/me.jpeg"
        height={160}
        width={160}
        objectFit="contain"
        alt="Soultan Muhammad Albar"
      />
      <div className="flex flex-col md:ml-8 justify-center">
        <h1 className="text-xl md:text-3xl text-blueGray dark:text-white mt-8 md:mt-0 text-center ml-6 mr-6 md:ml-0 md:mr-0 md:text-start font-regular mb-4">
          Hello, I'm
          <span className="text-blue"> Soultan </span>
          Muhammad Albar
        </h1>
        <p className="text-base md:text-xl text-blueGray dark:text-white flex font-regular place-self-center md:place-self-start">
          <span className="text-blue">Mobile</span>
          {"\xa0"}Engineer
        </p>
      </div>
    </Layout>
  );
}
