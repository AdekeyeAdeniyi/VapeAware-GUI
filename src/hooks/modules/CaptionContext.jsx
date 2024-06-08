import { createContext, useState } from "react";

// Create a Context
export const CaptionContext = createContext();

// Create a Provider component
export const CaptionProvider = ({ children }) => {
  const [caption, setCaption] = useState("");
  const [isCaption, setIsCaption] = useState(false);

  const setCaptionText = (value) => setCaption(value);

  const showCaption = () => {
    setIsCaption(true);
  };

  const hideCaption = () => {
    setIsCaption(false);
  };

  return (
    <CaptionContext.Provider
      value={{ caption, isCaption, setCaptionText, showCaption, hideCaption }}
    >
      {children}
    </CaptionContext.Provider>
  );
};
