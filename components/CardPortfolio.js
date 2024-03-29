import Image from "next/image";
import { memo } from "react";
import Tag from "./Tag";

const CardPortfolio = ({ item, index }) => {
  return (
    <div className="bg-white dark:bg-blueGray shadow-lg p-1 rounded-lg flex flex-col lg:flex-row card-blog transition-transform">
      <div className="bg-blueGray lg:w-2/4 w-full h-56 md:h-72 lg:h-auto relative rounded overflow-hidden shadow-lg mb-4 lg:mb-0">
        <Image
          loading={index > 1 ? "lazy" : "eager"}
          className="relative"
          layout="fill"
          src={"/" + item?.image}
          alt="card-portfolio"
        />
      </div>
      <div className="pt-2 pl-3 pr-4 w-full h-auto lg:w-1/2 flex flex-1 flex-col justify-between">
        <div className="mb-4">
          <h1 className="text-2xl text-blueGray dark:text-white font-semibold mb-1">
            {item?.name}
          </h1>
          <p className="text-xs text-blueGray dark:text-white font-extralight mb-3">
            Created at {item?.start_date}
          </p>
          <p className="text-sm md:text-base font-light text-blueGray dark:text-white">
            {item?.description}
          </p>
          <div className="flex flex-row flex-wrap mt-2">
            {item?.stack?.map((item, index) => {
              if (item?.link) {
                return (
                  <a
                    key={index}
                    href={item?.link}
                    target="_blank"
                    className="mr-2 mb-2"
                  >
                    <Tag item={item} />
                  </a>
                );
              } else {
                return (
                  <div key={index} className={`mr-2 mb-2`}>
                    <Tag item={item} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 justify-end mb-2">
          {item?.project_link && (
            <a
              className={`underline text-blueGray dark:text-white  ${
                item?.source_code ? "mr-4" : ""
              }`}
              rel="noreferrer"
              target={"_blank"}
              href={item?.project_link}
            >
              Visit Project
            </a>
          )}
          {item?.source_code && (
            <a
              className="underline  text-blueGray dark:text-white"
              rel="noreferrer"
              target={"_blank"}
              href={item?.source_code}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(CardPortfolio);
