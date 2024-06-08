import { useContext, useEffect, useRef } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

const VideoPlayer = ({ timeLapseHandler, videoSrc, captionText, ...props }) => {
  const videoRef = useRef(null);
  const { setCaptionText } = useContext(CaptionContext);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const currentCaption = captionText.find(
        (caption) => currentTime >= caption.start && currentTime <= caption.end
      );

      if (timeLapseHandler) {
        timeLapseHandler(currentTime);
      }

      if (currentCaption) {
        setCaptionText(currentCaption.text);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", () => setCaptionText(""));

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", () => setCaptionText(""));
    };
  }, [captionText]);
  return (
    <video className="videoplayer" autoPlay ref={videoRef} {...props}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
