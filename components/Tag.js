import { memo } from "react";
import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  return (
    <div
      className={`shadow-md py-1 px-2 rounded-sm ${
        item?.darkBgColor !== "" ? "dark:" + item?.darkBgColor : ""
      } ${item?.bgColor}`}
    >
      <p className="text-xs text-black dark:text-white">
        {capitalizeEachWords(item?.name || "")}
      </p>
    </div>
  );
};

export default memo(Tag);
