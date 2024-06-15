import { createContext, useState } from "react";

// Create a Context
export const ProgressContext = createContext();

// Create a Provider component
export const ProgressProvider = ({ children }) => {
  const [value, setValue] = useState(7.6);
  const [slideValue, setSlideValue] = useState(0);
  const [key, setKey] = useState(0);

  const increamentValue = () => {
    if (value <= 100) {
      setValue((prevValue) => prevValue + 7.6);
      setSlideValue((prevValue) => prevValue + 1);
    }
  };

  const decreamentValue = () => {
    if (value > 8) {
      setValue((prevValue) => prevValue - 7.6);
      setSlideValue((prevValue) => prevValue - 1);
    }
  };

  const replaySlide = () => {
    setKey((prevKey) => prevKey + 1); // Update key to force re-render
  };

  return (
    <ProgressContext.Provider
      value={{
        slideValue,
        value,
        increamentValue,
        decreamentValue,
        key,
        replaySlide,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
