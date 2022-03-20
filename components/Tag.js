import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  return (
    <div
      className={`shadow-md py-1 px-2 rounded-sm 
        ${
          (item?.darkBgColor !== "" ? "dark:" + item?.darkBgColor : "") +
          " " +
          item?.bgColor
        }`}
    >
      <p className="text-xs">{capitalizeEachWords(item?.name || "")}</p>
    </div>
  );
};

export default Tag;
