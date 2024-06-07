import { useContext } from "react";
import { ProgressContext } from "../hooks/useContent";

const ProgressBar = () => {
  const { value } = useContext(ProgressContext);

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-2 bg-gray-400">
      <div className="relative w-full h-2 bg-gray-400">
        <span
          className="absolute top-0 bottom-0 left-0 bg-indigo-800 transition-all ease-linear"
          style={{ width: `${value}%` }}
        ></span>
      </div>
    </div>
  );
};

export default ProgressBar;
