import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  return (
    <div
      className={
        "shadow-md py-1 px-2 rounded-sm bg-orange dark:bg-red"
      }
    >
      <p className="text-xs">{capitalizeEachWords(item?.name || "")}</p>
    </div>
  );
};

export default Tag;
