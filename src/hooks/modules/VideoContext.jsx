import { createContext, useState } from "react";

// Create a Context
export const VideoContext = createContext();

// Create a Provider component
export const VideoProvider = ({ children }) => {
  const [videoEnd, setVideoEnd] = useState(false);

  return (
    <VideoContext.Provider
      value={{
        videoEnd,
        setVideoEnd,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
