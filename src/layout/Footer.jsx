import { useContext, useState } from "react";
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

const Footer = () => {
  const { decreamentValue, increamentValue } = useContext(ProgressContext);
  const [viewCaption, setViewCaption] = useState(true);

  return (
    <footer className="w-full bg-white px-4 py-6">
      {viewCaption && (
        <div className="mb-6 text-base bg-gray-200 p-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis
          voluptatem sed facere dolor tempora totam. Facilis quos quaerat ut
          tenetur nam.
        </div>
      )}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          {viewCaption ? (
            <Button
              Icon={MessageSquareMore}
              title="Captions"
              onClick={() => setViewCaption(false)}
            />
          ) : (
            <Button
              Icon={MessageSquare}
              title="Uncaptions"
              onClick={() => setViewCaption(true)}
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
