import { useContext } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

const Caption = () => {
  const { caption } = useContext(CaptionContext);

  return (
    <div className="absolute text-xl bg-[rgba(0,0,0,0.8)] text-white bottom-8 left-4 right-4 mx-auto px-2 w-fit">
      {caption}
    </div>
  );
};

export default Caption;
