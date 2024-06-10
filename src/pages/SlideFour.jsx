import { useContext } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide4 from "../assets/videos/vaping_slide_4.mp4";

import BackgroundImage from "../assets/images/VapingLessonBackground4.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideFour = () => {
  const { isCaption } = useContext(CaptionContext);
  const Captions = [
    {
      start: 0,
      end: 4,
      text: "When someone vapes, they don’t always know what they’re breathing in.",
    },
    {
      start: 4,
      end: 8,
      text: "The amount of nicotine and harmful chemicals in vape products can be different",
    },
    {
      start: 8,
      end: 12,
      text: "depending on the devices and the companies that make them. ",
    },
    {
      start: 12,
      end: 16,
      text: "Like cigarettes, the packaging for vape devices include warning labels.",
    },
    {
      start: 16,
      end: 20,
      text: "These labels include information about nicotine and addiction.",
    },
    {
      start: 20,
      end: 26,
      text: "The government is working to make more rules and regulations about vape products that companies need to follow, ",
    },
    {
      start: 26,
      end: 31,
      text: "but there are still some products out there that don’t meet government requirements.",
    },
    {
      start: 31,
      end: 36,
      text: "The law says that someone has to be 21 to buy vaping products.",
    },
    {
      start: 36,
      end: 39,
      text: "All vaping products are harmful for young people.",
    },
    {
      start: 39,
      end: 43,
      text: "It doesn’t matter if it’s legal or not.",
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
        videoSrc={VapingSlide4}
        captionText={Captions}
        className="w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
      />

      <div className="flex flex-col justify-center h-full pl-5 sm:pl-14 md:pl-[145px] max-w-[80ch] ">
        <div className="animate-slideIn">
          <h3 className="group relative text-3xl md:text-5xl mb-4">
            Rules and regulations: <Tooltip text="Rules and regulations" />
          </h3>
          <ul className="text-xl md:text-3xl list-disc space-y-4">
            <List delaytime="4s">Nicotine amounts and chemicals can vary.</List>

            <List delaytime="12s">
              <span className="group relative">
                Warning labels <Tooltip text=" Warning labels" />
              </span>{" "}
              about nicotine and addiction.
            </List>

            <List delaytime="31s">
              Someone has to be 21 to buy vaping products.
            </List>
            <List delaytime="36s">
              All vaping devices and products are harmful for young people.
            </List>
          </ul>
        </div>
      </div>
      {isCaption && <Caption />}
    </>
  );
};

export default SlideFour;
