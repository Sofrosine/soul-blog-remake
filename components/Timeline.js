const Timeline = ({ item }) => {
  return (
    <div className="flex" style={{ width: "90%", minHeight: "6rem" }}>
      <div style={{ width: "40%" }}>
        <p className="text-right text-warmGray-700 text-sm">
          {item?.range_date}
        </p>
      </div>
      <div className="bg-blue-500 h-100 w-1 relative ml-4 mr-4">
        <div
          className="bg-blue-500 h-4 w-4 absolute rounded-xl"
          style={{ top: -6, left: -6 }}
        />
      </div>
      <div style={{ width: "50%" }}>
        <p className="text-blue-700">{item?.name}</p>
        <p className="text-xs text-blueGray-500 mb-2">{item?.as}</p>
        <ul className="mb-4 list-disc ml-4 text-blue-500">
          {item?.what?.map((itemWhat, index) => (
            <li className="mb-1" key={index}>
              <p className="text-xs text-warmGray-700 md:text-sm">{itemWhat}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
