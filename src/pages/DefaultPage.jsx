import { useEffect, useState } from "react";

import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

import Logo from "../assets/images/logo.png";

const DefaultPage = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center flex-col gap-8 w-full h-screen bg-[#0074c8]">
          <div className="w-4/5 md:w-1/3">
            <img
              src={Logo}
              alt="Children Wisconsin Logo"
              className="object-cover w-full h-full animate-pulse"
            />
          </div>
          <div className="flex flex-col justify-center gap-3 items-center text-white w-full">
            {loadingPercentage < 100 ? (
              <>
                <span className="text-2xl font-normal"> Loading... </span>
                <div className="relative w-1/4 h-1 bg-[#629cc7] rounded-full overflow-hidden">
                  <span
                    className="absolute top-0 left-0 right-0 bottom-0 bg-white"
                    style={{ width: `${loadingPercentage}%` }}
                  ></span>
                </div>
              </>
            ) : (
              <button onClick={() => setIsLoading(false)}>Start Lesson</button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-screen bg-gray-300">
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
};

export default DefaultPage;
