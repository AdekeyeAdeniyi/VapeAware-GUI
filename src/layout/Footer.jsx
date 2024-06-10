import { useContext } from "react";
import { ProgressContext } from "../hooks/modules/ProgressContext";
import { CaptionContext } from "../hooks/modules/CaptionContext";
import { VideoContext } from "../hooks/modules/VideoContext";

import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  MessageSquareMore,
  Repeat,
  StickyNote,
} from "lucide-react";
import Button from "../components/Button";

const Footer = () => {
  const { decreamentValue, increamentValue, replaySlide } =
    useContext(ProgressContext);
  const { isCaption, showCaption, hideCaption, setCaptionText } =
    useContext(CaptionContext);
  const { videoEnd, setVideoEnd } = useContext(VideoContext);

  const reset = () => {
    setCaptionText(" "), setVideoEnd(false);
  };

  return (
    <footer className=" w-full h-28 bg-white px-4 py-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          {!isCaption ? (
            <Button
              Icon={MessageSquareMore}
              title="Captions"
              isFixed={true}
              onClick={showCaption}
            />
          ) : (
            <Button
              Icon={MessageSquare}
              title="Uncaptions"
              isFixed={true}
              onClick={hideCaption}
            />
          )}
          <Button Icon={StickyNote} title="Worksheet" />
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Button
            Icon={ChevronLeft}
            title="Back"
            iconLocation="left"
            onClick={() => {
              decreamentValue(), reset();
            }}
          />
          <Button Icon={Repeat} title="Replay" onClick={replaySlide} />
          <Button
            Icon={ChevronRight}
            title="Next"
            onClick={() => {
              increamentValue(), reset();
            }}
            style={{ backgroundColor: videoEnd && "#6a62e1" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
