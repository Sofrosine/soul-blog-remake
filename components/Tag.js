import { useEffect } from "react";
import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  var classes = ["shadow-md", "py-1", "px-2", "rounded-sm"];

  if (item?.darkBgColor !== "") {
    classes.push(`dark:${item?.darkBgColor}`);
  }
  classes.push(item?.bgColor);

  return (
    <div className={classes.join(" ")}>
      <p className="text-xs">{capitalizeEachWords(item?.name || "")}</p>
    </div>
  );
};

export default Tag;
