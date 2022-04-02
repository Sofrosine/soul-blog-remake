import { memo } from "react";

const ProgressBar = ({ percentage = "50" }) => {
  return (
    <div className="w-full relative bg-blueGray-300 h-2 rounded">
      <div
        style={{ width: `${percentage}%` }}
        className={`absolute z-50 h-2 bg-blue-500 rounded text-center`}
      ></div>
    </div>
  );
};

export default memo(ProgressBar);
