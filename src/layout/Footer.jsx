import { useContext } from "react";
import { ProgressContext } from "../hooks/useContent";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  MessageSquareMore,
  Repeat,
  StickyNote,
} from "lucide-react";
import Button from "../components/Button";

const Footer = ({ isCaption, captionHandler }) => {
  const { decreamentValue, increamentValue } = useContext(ProgressContext);

  return (
    <footer className=" w-full bg-white px-4 py-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          {!isCaption ? (
            <Button
              Icon={MessageSquareMore}
              title="Captions"
              isFixed={true}
              onClick={() => captionHandler(true)}
            />
          ) : (
            <Button
              Icon={MessageSquare}
              title="Uncaptions"
              isFixed={true}
              onClick={() => captionHandler(false)}
            />
          )}
          <Button Icon={StickyNote} title="Worksheet" />
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Button
            Icon={ChevronLeft}
            title="Back"
            iconLocation="left"
            onClick={decreamentValue}
          />
          <Button Icon={Repeat} title="Replay" />
          <Button Icon={ChevronRight} title="Next" onClick={increamentValue} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
