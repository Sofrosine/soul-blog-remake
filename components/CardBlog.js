import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { memo } from "react";

const CardBlog = ({ item, index }) => {
  return (
    <Link href={"blog/[blogName]"} as={`blog/${item?.link}`}>
      <a className="bg-white dark:bg-blueGray shadow-md hover:shadow-xl p-1 rounded-lg flex flex-col lg:flex-row card-blog transition-transform">
        <div className="bg-blueGray lg:w-2/4 w-full h-56 md:h-72 lg:h-auto relative rounded overflow-hidden shadow-lg mb-4 lg:mb-0">
          <Image
            loading={index > 1 ? "lazy" : "eager"}
            className="relative"
            layout="fill"
            src={"/" + item?.thumbnail}
            alt="card-blog"
          />
        </div>
        <div className="pt-2 pl-3 pr-4 w-full h-auto lg:w-1/2 flex flex-1 flex-col justify-between">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold text-blueGray dark:text-white mb-1">
              {item?.title}
            </h1>
            <p className="text-xs font-light mb-3">
              📅{"  "}
              {format(new Date(item?.date), "MMMM yyyy")}{" "}
              <span className="mx-1">|</span>
              🌱 {item?.readingTime}
            </p>
            <p className="text-sm md:text-base font-light text-blueGray dark:text-white">
              {item?.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default memo(CardBlog);
