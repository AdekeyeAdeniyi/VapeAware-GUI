import { createContext, useState } from "react";

// Create a Context
export const ProgressContext = createContext();

// Create a Provider component
export const ProgressProvider = ({ children }) => {
  const [value, setValue] = useState(1);

  const increamentValue = () => {
    if (value <= 100) {
      setValue((prevValue) => prevValue + 1);
    }
  };

  const decreamentValue = () => {
    if (value >= 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <ProgressContext.Provider
      value={{ value, increamentValue, decreamentValue }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
