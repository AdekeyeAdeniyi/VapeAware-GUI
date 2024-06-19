import { useContext, useEffect, useRef } from "react";

import { CaptionContext } from "../hooks/modules/CaptionContext";
import { VideoContext } from "../hooks/modules/VideoContext";
import { ProgressContext } from "../hooks/modules/ProgressContext";

import Caption from "../components/Caption";

import BackgroundImage from "../assets/images/VapingLessonBackground3.png";

import audio from "../assets/audio/knowlege-check-activity.mp3";

const captions = [
  {
    start: 0,
    end: 4,
    text: "Let’s see if you can decide what’s true about vaping and what’s false.",
  },
  {
    start: 4,
    end: 6,
    text: "Drag the statement to the left if it’s true and to the right if you think it’s false.",
  },
];

const SlideEight = () => {
  const { isCaption, setCaptionText } = useContext(CaptionContext);
  const { setVideoEnd } = useContext(VideoContext);
  const { increamentValue } = useContext(ProgressContext);
  const audioRef = useRef(null);

  useEffect(() => {
    let audio = audioRef.current;

    const updateCurrentTime = () => {
      const currentTime = audio.currentTime;
      const currentCaption = captions.find(
        (caption) => currentTime >= caption.start && currentTime <= caption.end
      );

      if (currentCaption) setCaptionText(currentCaption.text);
    };
    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("ended", () => {
      setCaptionText(" "), setVideoEnd(true);
    });

    audio.play();

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("ended", () => {
        setCaptionText(" "), setVideoEnd(true);
      });
    };
  }, [captions]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
        <img
          src={BackgroundImage}
          alt="backgroung-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col px-5 items-center">
        <h1 className="text-4xl md:text-5xl text-center">
          Knowledge check activity
        </h1>
        <p className="my-8 text-xl">
          <b>Instruction:</b> Drag and Drop either the <b>True</b> or{" "}
          <b>False</b> button into the square box above
        </p>

        <button
          onClick={increamentValue}
          className="relative inline-flex justify-center items-center gap-1 w-28 h-11 p-2 sm:px-6 sm:py-2 bg-indigo-600 text-white rounded-full font-semibold transition-all hover:bg-indigo-800"
        >
          Start
        </button>
      </div>
      <audio ref={audioRef} src={audio} />
      {isCaption && <Caption />}
    </div>
  );
};

export default SlideEight;
