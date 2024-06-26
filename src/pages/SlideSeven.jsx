import { useContext, useState } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide5 from "../assets/videos/vaping_slide_7.mp4";

import BackgroundImage from "../assets/images/VapingLessonBackground4.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideSeven = () => {
  const { isCaption } = useContext(CaptionContext);
  const [videoTime, setVideoTime] = useState(null);

  const Captions = [
    {
      start: 0,
      end: 5,
      text: "One of the most serious impacts of vaping is an illness called EVALI.",
    },
    {
      start: 5,
      end: 9,
      text: "EVALI stands for E-cigarette or Vaping Use-Associated Lung Injury.",
    },
    {
      start: 9,
      end: 14,
      text: "It’s a severe lung disease that’s caused by vaping, and it was first identified in 2019.",
    },
    {
      start: 14,
      end: 20,
      text: "Most people who are diagnosed with EVALI end up in the hospital, and some of them have died.",
    },
    {
      start: 20,
      end: 25,
      text: "Vitamin E acetate, which is added to some vape products, has been linked to EVALI.",
    },
    {
      start: 25,
      end: 30,
      text: "It’s found in fruit, meat, and vegetables and is usually safe to eat.",
    },
    {
      start: 30,
      end: 35,
      text: "It’s also found in skin care products, which are also typically safe. It just shouldn’t be inhaled.",
    },
    {
      start: 35,
      end: 42,
      text: "Vaping hasn’t been around for that long, so there’s a lot we still don’t know about how vaping impacts health.",
    },
    {
      start: 42,
      end: 47,
      text: " If someone asks you to vape, the best choice is to tell them no.",
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
        timeLapseHandler={setVideoTime}
        className={` ${
          videoTime < 36 &&
          "w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
        } `}
      />

      {videoTime && (
        <div className="flex flex-col justify-center pl-4 md:pl-10 lg:pl-24 h-full max-w-[80ch]">
          {videoTime < 20 ? (
            <div className="animate-slideIn">
              <h3 className="group relative text-3xl md:text-5xl mb-4">
                EVALI:
              </h3>
              <ul className="text-xl md:text-2xl list-disc pl-7 space-y-4">
                <List delaytime="4s">
                  <span className="group block relative w-full">
                    EVALI{" "}
                    <Tooltip
                      topValue="108"
                      text="E-cigarette, or Vaping Product, Use Associated Lung Injury (EVALI) – a serious medical condition in which a person’s lungs become damaged from substances in e-cigarettes and vaping products"
                    />
                  </span>
                </List>
                <List delaytime="9s">Severe lung disease</List>
                <List delaytime="15s">Leads to hospitalization</List>
                <List delaytime="19s">Can cause death</List>
              </ul>
            </div>
          ) : (
            <div className="animate-slideIn">
              <h3 className="group relative text-3xl md:text-5xl mb-4">
                <span className="group inline-block">
                  Vitamin E acetate:{" "}
                  <Tooltip
                    topValue="68"
                    text="an oily chemical added to some vape liquids and devices that contain THC and has been linked to lung issues like EVALI"
                  />
                </span>
              </h3>
              <ul className="text-xl md:text-3xl list-disc pl-7 space-y-4">
                <List delaytime="26s">Safe in foods</List>
                <List delaytime="30s">Safe in skin care products</List>
                <List delaytime="34s">Shouldn’t be inhaled</List>
              </ul>
            </div>
          )}
        </div>
      )}
      {isCaption && <Caption />}
    </>
  );
};

export default SlideSeven;
