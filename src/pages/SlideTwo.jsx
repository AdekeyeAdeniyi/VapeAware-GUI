import { useContext, useState } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide2 from "../assets/videos/vaping_slide_2.mp4";

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

      <div className="flex flex-col justify-center h-full pl-5 sm:pl-14 md:pl-[145px] max-w-[80ch] ">
        {videoTime < "17" && (
          <div className="animate-slideIn">
            <h3 className="group relative text-3xl md:text-5xl mb-4">
              Vaping: <Tooltip text="Vaping" />
            </h3>
            <ul className="text-xl md:text-3xl list-disc space-y-4">
              <List delaytime=".8s">
                <span className="group block relative w-full">
                  Devices <Tooltip text="Devices" />
                </span>
                heat a liquid into a{" "}
                <span className="group block relative w-full">
                  vapor. <Tooltip text="Vapor" />
                </span>
              </List>

              <List delaytime="3.5s">
                <span className="group block relative w-full">
                  Vaping liquids <Tooltip text="Vaping liquids" />
                </span>{" "}
                have nicotine, harmful{" "}
                <span className="group block relative w-full">
                  chemicals <Tooltip text="Chemicals" />
                </span>{" "}
                and flavorings in them.
              </List>

              <List delaytime="9.5s">The liquid isn’t just water.</List>
            </ul>
          </div>
        )}
        {videoTime > "17" && (
          <h3 className="text-5xl mb-4">
            Most vaping products contain nicotine.
          </h3>
        )}
      </div>
      {isCaption && <Caption />}
    </>
  );
};

export default SlideTwo;
