import { useContext } from "react";
import { ProgressContext } from "../hooks/modules/ProgressContext";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  MessageSquareMore,
  Repeat,
  StickyNote,
} from "lucide-react";
import Button from "../components/Button";
import { CaptionContext } from "../hooks/modules/CaptionContext";

const Footer = () => {
  const { decreamentValue, increamentValue, replaySlide } =
    useContext(ProgressContext);
  const { isCaption, showCaption, hideCaption, setCaptionText } =
    useContext(CaptionContext);

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
              decreamentValue(), setCaptionText(" ");
            }}
          />
          <Button Icon={Repeat} title="Replay" onClick={replaySlide} />
          <Button
            Icon={ChevronRight}
            title="Next"
            onClick={() => {
              increamentValue(), setCaptionText(" ");
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
