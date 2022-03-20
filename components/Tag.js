import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  return (
    <div className={item?.bgColor}>
      <p className="text-xs">{capitalizeEachWords(item?.name || "")}</p>
    </div>
  );
};

export default Tag;
