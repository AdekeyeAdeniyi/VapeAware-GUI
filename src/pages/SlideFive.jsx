import { useContext } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide5 from "../assets/videos/vaping_slide_5.mp4";

import BackgroundImage from "../assets/images/VapingLessonBackground1.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideFive = () => {
  const { isCaption } = useContext(CaptionContext);
  const Captions = [
    {
      start: 0,
      end: 2,
      text: "We know that vaping is harmful.",
    },
    {
      start: 2,
      end: 5,
      text: "It can have some short-term impacts on health that include;",
    },
    {
      start: 5,
      end: 6,
      text: "coughing",
    },
    {
      start: 6,
      end: 7,
      text: "trouble breathing",
    },
    {
      start: 7,
      end: 8,
      text: "dry mouth",
    },
    {
      start: 8,
      end: 9,
      text: "headaches",
    },
    {
      start: 9,
      end: 10,
      text: "eye irritations",
    },
    {
      start: 10,
      end: 12,
      text: "and nausea.",
    },
    {
      start: 12,
      end: 16,
      text: "These symptoms can show up pretty quickly, depending on how much someone vapes and how often",
    },
    {
      start: 16,
      end: 21,
      text: "And if someone stops vaping, they usually go away.",
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
        videoSrc={VapingSlide5}
        captionText={Captions}
        className="w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
      />

      <div className="flex flex-col justify-center h-full pl-5 sm:pl-14 md:pl-[145px] max-w-[80ch] ">
        <div className="animate-slideIn">
          <h3 className="group relative text-3xl md:text-5xl mb-4">
            Short-term impacts:
          </h3>
          <ul className="text-xl md:text-3xl list-disc space-y-4">
            <List delaytime="5s">Coughing</List>

            <List delaytime="6s">Trouble breathing</List>

            <List delaytime="7s">Dry mouth</List>
            <List delaytime="8s">Headaches</List>
            <List delaytime="9s">
              <span className="group relative">
                Eye Irritations <Tooltip text="Eye Irritations" />
              </span>
            </List>
            <List delaytime="10s">
              <span className="group relative">
                Nausea <Tooltip text="Nausea" />
              </span>
            </List>
          </ul>
        </div>
      </div>
      {isCaption && <Caption />}
    </>
  );
};

export default SlideFive;
