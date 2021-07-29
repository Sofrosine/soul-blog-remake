import Image from "next/image";
import Layout from "../components/Layout";
import FYIJson from "../data/fyi.json";
import SocialMediaJSON from "../data/socialmedia.json";

const FYI = () => {
  return (
    <Layout
      metaKeywords="soultanid, soultan muhammad albar, about soultan muhammad albar, about soultan albar, about soultanid, soultan, about soultan, nextjs, soultan portofolio, soultan muhammad albar portofolio"
      metaDescription="About Soultan"
      metaTitle="About"
      title="About"
      className="flex flex-col items-center pb-20 pt-8"
    >
      <div className="w-4/5 lg:w-2/5">
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2 text-blueGray-700">
            Why i make my own website?
          </h1>
          <p className="text-xs text-warmGray-700 md:text-sm mb-2">
            This website created when i was <i>gabut</i>.
          </p>
          <p className="text-xs text-warmGray-700 md:text-sm">
            So, if you are <i>gabut</i>, you should make another one for
            yourself too.
          </p>
        </div>
        {FYIJson.map((item, index) => (
          <div className="mb-4" key={index}>
            <h1 className="text-xl md:text-2xl font-semibold mb-2 text-blueGray-700">
              {item?.title}
            </h1>
            <ul className="list-disc pl-8 text-blueGray-700">
              {item?.data.map((itemData, indexData) => (
                <li key={indexData}>
                  <p className="text-xs text-warmGray-700 md:text-sm">
                    {itemData}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2 text-blueGray-700">
            How to find me
          </h1>
          <p className="text-xs text-warmGray-700 md:text-sm mb-4">
            You can find me through one of these:
          </p>
          <span className="flex flex-row gap-2">
            {SocialMediaJSON.map((item, key) => (
              <a
                target="_blank"
                className="px-3 hover:shadow-xl rounded"
                key={key}
                href={item.href}
              >
                <Image
                  className="shadow"
                  src={item.src}
                  height={32}
                  width={32}
                />
              </a>
            ))}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default FYI;