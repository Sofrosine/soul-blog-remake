import Link from "next/link";

const Timeline = ({ item }) => {
  return (
    <div className="flex" style={{ width: "90%", minHeight: "6rem" }}>
      <div style={{ width: "40%" }}>
        <p className="text-right text-blueGray dark:text-white text-sm">
          {item?.range_date}
        </p>
      </div>
      <div className="bg-blue h-100 w-1 relative ml-4 mr-4">
        <div
          className="bg-blue h-4 w-4 absolute rounded-xl"
          style={{ top: -6, left: -6 }}
        />
      </div>
      <div style={{ width: "50%" }}>
        {item?.href ? (
          <Link href={item?.href}>
            <a target="_blank" rel="noopener noreferrer" className="text-blue">
              {item?.name}
            </a>
          </Link>
        ) : (
          <p className="text-blue">{item?.name}</p>
        )}
        <p className="text-xs text-blueGray dark:text-white mb-2">{item?.as}</p>
        <ul className="mb-4 list-disc ml-4 text-blue">
          {item?.what?.map((itemWhat, index) => (
            <li className="mb-1" key={index}>
              <p className="text-xs text-blueGray dark:text-white md:text-sm">
                {itemWhat}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
