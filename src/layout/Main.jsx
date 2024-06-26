import { useContext } from "react";
import { ProgressContext } from "../hooks/modules/ProgressContext";

import SlideOne from "../pages/SlideOne";
import SlideTwo from "../pages/SlideTwo";
import SlideThree from "../pages/SlideThree";
import SlideFour from "../pages/SlideFour";
import SlideFive from "../pages/SlideFive";
import SlideSix from "../pages/SlideSix";
import SlideSeven from "../pages/SlideSeven";
import SlideEight from "../pages/SlideEight";
import SlideNine from "../pages/SlideNine";
import SlideTen from "../pages/SlideTen";
import SlideEleven from "../pages/SlideEleven";
import SlideTwelve from "../pages/SlideTwelve";
import SlideThirteen from "../pages/SlideThirteen";
import SlideFourteen from "../pages/SlideFourteen";

const Main = () => {
  const { key, slideValue } = useContext(ProgressContext);

  const renderSlide = () => {
    switch (slideValue) {
      case 0:
        return <SlideOne key={key} />;
      case 1:
        return <SlideTwo key={key} />;
      case 2:
        return <SlideThree key={key} />;
      case 3:
        return <SlideFour key={key} />;
      case 4:
        return <SlideFive key={key} />;
      case 5:
        return <SlideSix key={key} />;
      case 6:
        return <SlideSeven key={key} />;
      case 7:
        return <SlideEight key={key} />;
      case 8:
        return <SlideNine key={key} />;
      case 9:
        return <SlideTen key={key} />;
      case 10:
        return <SlideEleven />;
      case 11:
        return <SlideTwelve />;
      case 12:
        return <SlideThirteen />;
      case 13:
        return <SlideFourteen />;
      default:
        return <div>Unknown Slide</div>;
    }
  };
  return (
    <main className="relative basis-full isolate overflow-hidden">
      {renderSlide()}
    </main>
  );
};

export default Main;
