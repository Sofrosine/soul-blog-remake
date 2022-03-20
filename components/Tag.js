import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  return (
    <div className={"shadow-md py-1 px-2 rounded-sm"}>
      <div className={`${"dark:" + item?.darkBgColor + " " + item?.bgColor}`}>
        <p className="text-xs">{capitalizeEachWords(item?.name || "")}</p>
      </div>
    </div>
  );
};

export default Tag;
