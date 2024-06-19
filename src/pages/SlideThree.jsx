import { useContext, useState } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide3 from "../assets/videos/vaping_slide_3.mp4";

import BackgroundImage from "../assets/images/VapingLessonBackground2.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideThree = () => {
  const { isCaption } = useContext(CaptionContext);
  const [videoTime, setVideoTime] = useState(null);

  const Captions = [
    {
      start: 0,
      end: 1,
      text: "So nicotine,",
    },
    {
      start: 1,
      end: 3,
      text: "what is it and why is it bad?",
    },
    {
      start: 3,
      end: 5,
      text: "Well, it’s a stimulant drug.",
    },
    {
      start: 5,
      end: 9,
      text: "Stimulants speed up messages being sent from the brain to the rest of the body.",
    },
    {
      start: 9,
      end: 11,
      text: "It can also lead to addiction.",
    },
    {
      start: 11,
      end: 18,
      text: "That means if a person starts using nicotine, their body will become dependent on it, and it will be very hard for them to stop using it.",
    },
    {
      start: 18,
      end: 22,
      text: "It’s important to know that it doesn’t take long to get addicted to nicotine!",
    },
    {
      start: 22,
      end: 27,
      text: "When someone who is addicted to nicotine stops using it, they go through something called withdrawal.",
    },
    {
      start: 27,
      end: 36,
      text: "Nicotine withdrawal symptoms can include; headaches, irritability, restlessness, tremors or shaking, sweating, and dizziness.",
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
        videoSrc={VapingSlide3}
        captionText={Captions}
        timeLapseHandler={setVideoTime}
        className="w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
      />

      {videoTime && (
        <div className="flex flex-col justify-center pl-4 md:pl-10 lg:pl-24 h-full max-w-[80ch]">
          <div className="animate-slideIn">
            <h3 className="group relative text-3xl md:text-5xl mb-4">
              Nicotine:{" "}
              <Tooltip
                topValue="48"
                text="a highly addictive stimulant drug found in tobacco and vaping devices"
              />
            </h3>
            <ul className="text-xl md:text-2xl list-disc pl-7 space-y-4">
              <List delaytime="5s">
                A{" "}
                <span className="group inline-block">
                  stimulant{" "}
                  <Tooltip
                    topValue="88"
                    text="a type of drug that speeds up the body systems and may make someone energetic, alert, overly excited or very talkative"
                  />
                </span>{" "}
                drug
              </List>

              <List delaytime="11s">
                Use can lead to{" "}
                <span className="group inline-block">
                  addiction{" "}
                  <Tooltip
                    topValue="68"
                    text="a condition or disease in which a person is unable to stop using a substance or engaging in a behavior"
                  />
                </span>
              </List>

              <List delaytime="28s">
                Nicotine{" "}
                <span className="group inline-block">
                  withdrawal{" "}
                  <Tooltip
                    topValue="148"
                    text="occurs when someone is addicted a drug and stops using. It includes physical, mental and emotional symptoms that make quitting a drug really hard to do. Nicotine withdrawal symptoms can last from several days to several weeks after quitting."
                  />
                </span>
              </List>
            </ul>
          </div>
        </div>
      )}
      {isCaption && <Caption />}
    </>
  );
};

export default SlideThree;
