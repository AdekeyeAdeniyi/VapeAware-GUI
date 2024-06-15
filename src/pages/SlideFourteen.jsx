import { useContext, useEffect, useRef } from "react";

import { CaptionContext } from "../hooks/modules/CaptionContext";
import { VideoContext } from "../hooks/modules/VideoContext";

import Logo from "../assets/images/logo.png";

import audio from "../assets/audio/end-slide.mp3";
import Caption from "../components/Caption";

const SlideFourteen = () => {
  const { isCaption, setCaptionText } = useContext(CaptionContext);
  const { setVideoEnd } = useContext(VideoContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef) {
      const audioEL = audioRef.current;
      audioEL.src = audio;

      audioEL.addEventListener("play", () => {
        setCaptionText("Great job, you’ve completed the lesson!");
      });
      audioEL.addEventListener("ended", () => {
        setCaptionText(" "), setVideoEnd(true);
      });

      audioEL.play();

      return () => {
        audioEL.removeEventListener("play", () => {
          setCaptionText("Great job, you’ve completed the lesson!");
        });
        audioEL.removeEventListener("ended", () => {
          setCaptionText(" "), setVideoEnd(true);
        });
      };
    }
  }, [audioRef]);
  return (
    <div className="flex justify-center items-center flex-col gap-8 w-full h-full bg-[#0074c8]">
      <div className="w-4/5 md:w-1/3">
        <img
          src={Logo}
          alt="Children Wisconsin Logo"
          className="object-cover w-full h-full animate-pulse"
        />
      </div>
      <audio ref={audioRef}></audio>
      {isCaption && <Caption />}
    </div>
  );
};

export default SlideFourteen;
