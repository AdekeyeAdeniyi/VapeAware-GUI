import { useState } from "react";
import { ProgressProvider } from "./hooks/useContent";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => {
  const [isCaption, setIsCaption] = useState(true);
  return (
    <ProgressProvider>
      <div className="flex flex-col w-full h-screen bg-gray-300">
        <Header />
        <Main viewCaption={isCaption} />
        <Footer isCaption={isCaption} captionHandler={setIsCaption} />
      </div>
    </ProgressProvider>
  );
};

export default App;
