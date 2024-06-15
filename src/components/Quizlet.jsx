import { useContext, useEffect, useRef } from "react";

import { VideoContext } from "../hooks/modules/VideoContext";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import Caption from "./Caption";

const Quizlet = ({ question, audioSrc, captions, backgroundImage }) => {
  const { isCaption, setCaptionText } = useContext(CaptionContext);
  const { setVideoEnd } = useContext(VideoContext);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEL = audioRef.current;
    audioEL.src = audioSrc;

    const updateCurrentTime = () => {
      const currentTime = audioEL.currentTime;
      const currentCaption = captions.find(
        (caption) => currentTime >= caption.start && currentTime <= caption.end
      );

      if (currentCaption) setCaptionText(currentCaption.text);
    };
    audioEL.addEventListener("timeupdate", updateCurrentTime);
    audioEL.addEventListener("ended", () => {
      setCaptionText(" "), setVideoEnd(true);
    });

    audioEL.play();

    return () => {
      audioEL.removeEventListener("timeupdate", updateCurrentTime);
      audioEL.removeEventListener("ended", () => {
        setCaptionText(" "), setVideoEnd(true);
      });
    };
  }, [audioSrc, captions]);
  return (
    <>
      <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
        <img
          src={backgroundImage}
          alt="backgroung-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center md:max-w-[90ch] mx-auto h-full px-8">
        <h3 className="text-2xl mb-4">Q. {question.title}</h3>
        <div className="space-y-4">
          {question.options.map((option, idx) => (
            <label
              key={`${question.id}-${idx}`}
              htmlFor={`${question.id}-${idx}`}
              className="relative flex gap-x-3 items-center bg-gray-400 w-full h-11 rounded-md px-5"
            >
              <input
                id={`${question.id}-${idx}`}
                name={question.id}
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span className="text-base md:text-lg">{option}</span>
            </label>
          ))}
        </div>
        <audio ref={audioRef}></audio>
        {isCaption && <Caption />}
      </div>
    </>
  );
};

export default Quizlet;
