import { useContext } from "react";
import ProgressBar from "../components/ProgressBar";
import { ProgressContext } from "../hooks/modules/ProgressContext";

const Header = () => {
  const { slideValue } = useContext(ProgressContext);

  const renderTitle = () => {
    switch (slideValue) {
      case 0:
        return "1 - Intro";
      case 1:
        return "2 - What is it";
      case 2:
        return "3 - Nicotine and Addiction";
      case 3:
        return "4 - Rules and regulations";
      case 4:
        return "5 - Short term";
      default:
        break;
    }
  };
  return (
    <header className="relative flex items-center justify-start h-24 px-4 flex-shrink-0 bg-white overflow-hidden">
      <div className="container mx-auto ">
        <h1 className="pb-2 text-3xl font-medium"> {renderTitle()}</h1>
      </div>
      <ProgressBar />
    </header>
  );
};

export default Header;
