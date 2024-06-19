import { useContext, useState } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide5 from "../assets/videos/vaping_slide_6.mp4";

import BackgroundImage from "../assets/images/VapingLessonBackground3.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideSix = () => {
  const { isCaption } = useContext(CaptionContext);
  const [videoTime, setVideoTime] = useState(null);
  const Captions = [
    {
      start: 0,
      end: 6,
      text: "Someone who vapes regularly can experience more severe health impacts that could be permanent.",
    },
    {
      start: 6,
      end: 7,
      text: "Vaping can lead to ",
    },
    {
      start: 7,
      end: 8,
      text: "anxiety",
    },
    {
      start: 8,
      end: 9,
      text: "depression",
    },
    {
      start: 9,
      end: 10,
      text: "sleep problems",
    },
    {
      start: 11,
      end: 13,
      text: "lung damage",
    },
    {
      start: 13,
      end: 15,
      text: "trouble focusing",
    },
    {
      start: 15,
      end: 16,
      text: "organ damage",
    },
    {
      start: 16,
      end: 19,
      text: "and exposure to chemicals that cause cancer",
    },
    {
      start: 19,
      end: 21,
      text: "We know vaping can lead to addiction,",
    },
    {
      start: 21,
      end: 27,
      text: "and people who are addicted to vaping are more likely to get addicted to other drugs.",
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
        className="w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
      />

      {videoTime && (
        <div className="flex flex-col justify-center pl-4 md:pl-10 lg:pl-24 h-full max-w-[80ch]">
          <div className="animate-slideIn">
            <h3 className="group relative text-3xl md:text-5xl mb-4">
              Long-term impacts:
            </h3>
            <ul className="text-xl md:text-2xl list-disc pl-7 space-y-4">
              <List delaytime="8s">
                <span className="group inline-block">
                  Anxiety{" "}
                  <Tooltip text="a mental health condition when a person worries even though there is nothing to worry about, or worries all the time and it affects their daily life " />
                </span>
              </List>
              <List delaytime="9s">
                <span className="group inline-block">
                  Depression{" "}
                  <Tooltip text="a mental health condition when a person feels sad (or has a low or irritable mood) for an extended period of time and often loses interest or pleasure in doing usual activities" />
                </span>
              </List>
              <List delaytime="10s">Sleeping problem</List>
              <List delaytime="12s">
                <span className="group inline-block">
                  Lungs damage{" "}
                  <Tooltip text="vaping can lead to swelling in the lungs, which are the organs that air goes into when you breathe, that results in coughing, wheezing and shortness of breath. Over time, that swelling can lead to scarring and permanent harm to the lungs." />
                </span>
              </List>
              <List delaytime="13s">Trouble focusing</List>
              <List delaytime="15s">
                <span className="group inline-block">
                  Organ damage{" "}
                  <Tooltip text="occurs when the structure or function of an internal organ, such as kidneys, liver, brain, or heart, is impaired" />
                </span>
              </List>
              <List delaytime="17s">
                <span className="group inline-block">
                  Chemical exporsure{" "}
                  <Tooltip text="when a person comes into contact with a substance. Exposure can happen by breathing in a substance, eating or drinking it, or by contact with the body" />
                </span>
              </List>
              <List delaytime="22s">
                More likely to get addicted to other drugs
              </List>
            </ul>
          </div>
        </div>
      )}

      {isCaption && <Caption />}
    </>
  );
};

export default SlideSix;
