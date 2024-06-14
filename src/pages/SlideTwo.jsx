import { useContext, useState } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide2 from "../assets/videos/vaping_slide_2.mp4";

import Vape1 from "../assets/images/vape_1.jpeg";
import Vape2 from "../assets/images/vape_2.jpeg";
import Vape3 from "../assets/images/vape_3.jpeg";
import Vape4 from "../assets/images/vape_4.jpeg";
import Vape5 from "../assets/images/vape_5.jpeg";

import BackgroundImage from "../assets/images/VapingLessonBackground1.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideTwo = () => {
  const { isCaption } = useContext(CaptionContext);
  const [videoTime, setVideoTime] = useState(null);
  const Captions = [
    {
      start: 0,
      end: 3,
      text: "Vaping is when someone uses a device to breathe in liquid that’s heated into vapor.",
    },
    {
      start: 4,
      end: 10,
      text: "This liquid has things like nicotine, harmful chemicals, and can have flavorings in it.",
    },
    {
      start: 10,
      end: 16,
      text: "Some people believe vaping isn’t dangerous because they think the liquid is just water, but that’s just not true.",
    },
    {
      start: 16,
      end: 24,
      text: "Companies that make vape devices and products use fun colors and packaging to try and influence young people to try vaping.",
    },
    {
      start: 16,
      end: 30,
      text: "But it’s important to know that most of these products contain a harmful drug called nicotine.",
    },
  ];

  return (
    <>
      <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
        <img
          src={BackgroundImage}
          alt="backgroung-image"
          className="w-full h-full object-cover"
        />
      </div>
      <VideoPlayer
        videoSrc={VapingSlide2}
        captionText={Captions}
        timeLapseHandler={setVideoTime}
        className="w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
      />

      {videoTime && (
        <div className="flex flex-col justify-center pl-4 md:pl-10 lg:pl-24 h-full max-w-[80ch]">
          {videoTime < "17" && (
            <div className="animate-slideIn">
              <h3 className="group relative text-3xl md:text-5xl mb-4">
                Vaping: <Tooltip text="Vaping" />
              </h3>
              <ul className="text-xl md:text-2xl list-disc pl-7 space-y-4">
                <List delaytime="2s">
                  <span className="group inline-block relative">
                    Devices <Tooltip text="Devices" />
                  </span>{" "}
                  heat a liquid into a{" "}
                  <span className="group inline-block relative">
                    vapor. <Tooltip text="Vapor" />
                  </span>
                </List>

                <List delaytime="5s">
                  <span className="group inline-block relative">
                    Vaping liquids <Tooltip text="Vaping liquids" />
                  </span>{" "}
                  have nicotine, harmful{" "}
                  <span className="group inline-block relative">
                    chemicals <Tooltip text="Chemicals" />
                  </span>{" "}
                  and flavorings in them.
                </List>

                <List delaytime="14s">The liquid isn’t just water.</List>
              </ul>
            </div>
          )}
          {videoTime > "17" && (
            <h3 className="text-3xl md:text-5xl mb-4">
              Most vaping products contain nicotine.
              <div className=" flex flex-wrap gap-4 lg:grid grid-cols-2 lg:grid-cols-3 lg:gap-7 mt-4  lg:w-4/5">
                <img
                  src={Vape1}
                  alt="vape_product"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-full lg:h-[140px] object-cover hover:scale-110 transition-all"
                />
                <img
                  src={Vape2}
                  alt="vape_product"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-full lg:h-[140px] object-cover hover:scale-110 transition-all"
                />
                <img
                  src={Vape3}
                  alt="vape_product"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-full lg:h-[140px] object-cover hover:scale-110 transition-all"
                />
                <img
                  src={Vape4}
                  alt="vape_product"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-full lg:h-[140px] object-cover hover:scale-110 transition-all"
                />
                <img
                  src={Vape5}
                  alt="vape_product"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-full lg:h-[140px] object-cover hover:scale-110 transition-all"
                />
              </div>
            </h3>
          )}
        </div>
      )}
      {isCaption && <Caption />}
    </>
  );
};

export default SlideTwo;
