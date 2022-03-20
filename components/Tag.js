import { useEffect, useState } from "react";
import { capitalizeEachWords } from "../utils";

const Tag = ({ item }) => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      className={
        "shadow-md py-1 px-2 rounded-sm " +
        "dark:" +
        item?.darkBgColor +
        " " +
        item?.bgColor
      }
    >
      <p className="text-xs">{capitalizeEachWords(item?.name || "")}</p>
    </div>
  );
};

export default Tag;
