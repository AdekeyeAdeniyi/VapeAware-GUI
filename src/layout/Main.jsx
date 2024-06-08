import { useContext } from "react";
import { ProgressContext } from "../hooks/modules/ProgressContext";

import SlideOne from "../pages/SlideOne";
import SlideTwo from "../pages/SlideTwo";
import SlideThree from "../pages/SlideThree";

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
