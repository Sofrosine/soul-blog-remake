import Layout from "../components/Layout";
import Image from "next/image";

const socialMedia = [
  {
    src: "/github.png",
    href: "https://github.com/sofrosine",
  },
  {
    src: "/linkedin.png",
    href: "https://www.linkedin.com/in/soultanma/",
  },
  {
    src: "/facebook.png",
    href: "https://web.facebook.com/sofros1ne/",
  },
  {
    src: "/instagram.png",
    href: "https://www.instagram.com/soultan.muh/",
  },
];

export default function Home() {
  return (
    <Layout
      metaKeywords="soultan, soultan muhammad albar, soultan muhammad albar web, soultan albar web, soultanid web, soultan web, web soultan, nextjs web, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="Webnya Soultan"
      metaTitle="Soultan | React Native Developer"
      title="soultanid"
      className="flex flex-col md:flex-row justify-center items-center"
    >
      <Image
        className="rounded-full shadow"
        src="/me.jpeg"
        height={160}
        width={160}
        objectFit="cover"
        alt="profile-photo"
      />
      <div className="flex flex-col md:ml-8 justify-center">
        <h1 className="text-xl md:text-3xl text-blueGray-700 mt-8 md:mt-0 text-center ml-6 mr-6 md:ml-0 md:mr-0 md:text-start font-regular mb-4">
          Hello, I'm
          <span className="text-blue-500"> Soultan </span>
          Muhammad Albar
        </h1>
        <p className="text-base md:text-xl text-blueGray-500 flex font-regular place-self-center md:place-self-start">
          {/* I'm a{"\xa0"} */}
          <span className="text-blue-500">React Native</span>
          {"\xa0"}Developer
          {/* {'\xa0and\xa0'} */}
          {/* <span className="text-blue-500 animate-pulse">Web</span> */}
          {/* {"\xa0Enthusiast"} */}
        </p>
        {/* <span className="flex flex-row justify-center gap-2">
          {socialMedia.map((item, key) => (
            <a
              target="_blank"
              className="px-3 hover:shadow-xl rounded"
              key={key}
              href={item.href}
            >
              <Image className="shadow" src={item.src} height={32} width={32} />
            </a>
          ))}
        </span> */}
      </div>
    </Layout>
  );
}
