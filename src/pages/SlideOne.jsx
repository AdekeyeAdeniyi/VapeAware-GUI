import { useContext } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import VideoPlayer from "../components/VideoPlayer";

import VapingIntro from "../assets/videos/vaping_intro.mp4";
import Caption from "../components/Caption";

const SlideOne = () => {
  const { isCaption } = useContext(CaptionContext);
  const Captions = [
    {
      start: 0,
      end: 3,
      text: "Hey, we’re here today to talk to you about vaping.",
    },
    {
      start: 3,
      end: 10,
      text: "We’re going to figure out what vaping is, talk about addiction, and tell you about different ways that vaping could impact your life.",
    },
  ];

  return (
    <>
      <VideoPlayer videoSrc={VapingIntro} captionText={Captions} />
      {isCaption && <Caption />}
    </>
  );
};

export default SlideOne;
