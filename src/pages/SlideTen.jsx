import { useContext, useEffect } from "react";

import { CaptionContext } from "../hooks/modules/CaptionContext";
import { VideoContext } from "../hooks/modules/VideoContext";

import Caption from "../components/Caption";

import BackgroundImage from "../assets/images/VapingLessonBackground4.png";

import audio1 from "../assets/audio/13_post-testOne.mp3";
import audio2 from "../assets/audio/13_post-testTwo.mp3";

const captions = [
  "Nice work figuring out what’s true and what’s false about vaping.",
  "Now, you’re going to answer questions about what you learned and how you feel about vaping.",
];

const SlideTen = () => {
  const { isCaption, setCaptionText } = useContext(CaptionContext);
  const { setVideoEnd } = useContext(VideoContext);

  useEffect(() => {
    let audio = [new Audio(audio1), new Audio(audio2)];

    const handleAudio1Play = () => setCaptionText(captions[0]);
    const handleAudio2Play = () => setCaptionText(captions[1]);
    const handleAudioEnd = () => {
      setCaptionText(" "), setVideoEnd(true);
    };
    const handleAudio1End = () => {
      setCaptionText(" ");
      audio[1].play();
    };

    audio[0].addEventListener("play", handleAudio1Play);
    audio[0].addEventListener("ended", handleAudio1End);
    audio[1].addEventListener("play", handleAudio2Play);
    audio[1].addEventListener("ended", handleAudioEnd);

    audio[0].play();

    return () => {
      audio[0].removeEventListener("play", handleAudio1Play);
      audio[0].removeEventListener("ended", handleAudio1End);
      audio[1].removeEventListener("play", handleAudio2Play);
      audio[1].removeEventListener("ended", handleAudioEnd);
    };
  }, [audio1, audio2, captions]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
        <img
          src={BackgroundImage}
          alt="backgroung-image"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl text-center animate-pulse">
        Post-test transition
      </h1>
      {isCaption && <Caption />}
    </div>
  );
};

export default SlideTen;
