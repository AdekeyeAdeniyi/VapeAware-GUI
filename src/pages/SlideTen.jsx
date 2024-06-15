import { useContext, useEffect, useRef } from "react";

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

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  useEffect(() => {
    const handleAudio1Play = () => setCaptionText(captions[0]);
    const handleAudio2Play = () => setCaptionText(captions[1]);
    const handleAudioEnd = () => {
      setCaptionText(" "), setVideoEnd(true);
    };
    const handleAudio1End = () => {
      setCaptionText(" ");
      audio2Ref.current.play();
    };

    const audio1El = audio1Ref.current;
    const audio2El = audio2Ref.current;

    audio1El.addEventListener("play", handleAudio1Play);
    audio1El.addEventListener("ended", handleAudio1End);
    audio2El.addEventListener("play", handleAudio2Play);
    audio2El.addEventListener("ended", handleAudioEnd);

    audio1El.play();

    return () => {
      audio1El.removeEventListener("play", handleAudio1Play);
      audio1El.removeEventListener("ended", handleAudio1End);
      audio2El.removeEventListener("play", handleAudio2Play);
      audio2El.removeEventListener("ended", handleAudioEnd);
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
      <h1 className="text-4xl md:text-5xl text-center animate-pulse">
        Post-test transition
      </h1>
      <audio ref={audio1Ref} src={audio1} />
      <audio ref={audio2Ref} src={audio2} />
      {isCaption && <Caption />}
    </div>
  );
};

export default SlideTen;
