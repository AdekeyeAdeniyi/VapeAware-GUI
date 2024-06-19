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
        return "2 - What is vaping?";
      case 2:
        return "3 - Nicotine and Addiction";
      case 3:
        return "4 - Rules and regulations";
      case 4:
        return "5 - Short term impacts";
      case 5:
        return "6 - Long term impacts";
      case 6:
        return "7 - EVALI";
      case 7:
        return "8 – Knowledge check activity";
      case 8:
        return "8 – Knowledge check activity";
      case 9:
        return "13 - Post-test transition ";
      case 10:
        return "14 - Knowledge question";
      case 11:
        return "15 - Attitude question";
      case 12:
        return "16 - Behavioral intent question";
      case 13:
        return "17 -End slide";
      default:
        break;
    }
  };
  return (
    <header className="relative flex items-center justify-start h-24 px-4 flex-shrink-0 bg-white overflow-hidden">
      <div className="container">
        <h1 className="pb-2 text-3xl font-medium"> {renderTitle()}</h1>
      </div>
      <ProgressBar />
    </header>
  );
};

export default Header;
