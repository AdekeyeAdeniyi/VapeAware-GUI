import { useContext, useState } from "react";
import { CaptionContext } from "../hooks/modules/CaptionContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import VideoPlayer from "../components/VideoPlayer";

import VapingSlide2 from "../assets/videos/vaping_slide_2.mp4";

import Vape1 from "../assets/images/vape_1.jpeg";
import Vape2 from "../assets/images/vape_2.jpeg";
import Vape3 from "../assets/images/vape_3.jpeg";
import Vape4 from "../assets/images/vape_4.jpeg";
import Vape5 from "../assets/images/vape_5.jpeg";

import BackgroundImage from "../assets/images/VapingLessonBackground1.png";
import Caption from "../components/Caption";
import Tooltip from "../components/Tooltip";
import List from "../components/List";

const SlideTwo = () => {
  const { isCaption } = useContext(CaptionContext);
  const [videoTime, setVideoTime] = useState(null);
  const Captions = [
    {
      start: 0,
      end: 3,
      text: "Vaping is when someone uses a device to breathe in liquid that’s heated into vapor.",
    },
    {
      start: 4,
      end: 10,
      text: "This liquid has things like nicotine, harmful chemicals, and can have flavorings in it.",
    },
    {
      start: 10,
      end: 16,
      text: "Some people believe vaping isn’t dangerous because they think the liquid is just water, but that’s just not true.",
    },
    {
      start: 16,
      end: 24,
      text: "Companies that make vape devices and products use fun colors and packaging to try and influence young people to try vaping.",
    },
    {
      start: 16,
      end: 30,
      text: "But it’s important to know that most of these products contain a harmful drug called nicotine.",
    },
  ];

  return (
    <>
      <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
        <img
          src={BackgroundImage}
          alt="backgroung-image"
          className="w-full h-full object-cover"
        />
      </div>
      <VideoPlayer
        videoSrc={VapingSlide2}
        captionText={Captions}
        timeLapseHandler={setVideoTime}
        className="w-[200px] md:w-[300px] h-auto right-0 top-0 absolute border-4 border-indigo-500"
      />

      {videoTime && (
        <div className="flex flex-col justify-center px-4 md:px-10 lg:px-24 h-full max-w-[50%]">
          {videoTime < "17" && (
            <div className="animate-slideIn">
              <h3 className="group relative text-3xl md:text-5xl mb-4">
                <Tooltip text="breathing in a vapor that usually contains a liquid, nicotine and other chemicals and then breathing that vapor out" />
                Vaping:{" "}
              </h3>
              <ul className="text-xl md:text-2xl list-disc pl-7 space-y-4">
                <List delaytime="2s">
                  <span className="group inline-block">
                    Devices{" "}
                    <Tooltip text="something that uses a battery to heat up a vaping liquid into a vapor that is breathed in" />
                  </span>{" "}
                  heat a liquid into a{" "}
                  <span className="group inline-block">
                    vapor.{" "}
                    <Tooltip text="the common term for the aerosol mist that vaping devices make by heating up the liquid. It contains ultra-fine, or very tiny, particles that are breathed into the lungs." />
                  </span>
                </List>

                <List delaytime="5s">
                  <span className="group inline-block">
                    Vaping liquids{" "}
                    <Tooltip text="also called e-liquid, e-juice or vape juice. It typically contains water, nicotine and other chemicals. It can also contain chemicals that add flavors to the liquid" />
                  </span>{" "}
                  have nicotine, harmful{" "}
                  <span className="group inline-block">
                    chemicals{" "}
                    <Tooltip text="Chemany substance that has a defined composition because it is always made up of the same stufficals" />
                  </span>{" "}
                  and flavorings in them.
                </List>

                <List delaytime="14s">The liquid isn’t just water.</List>
              </ul>
            </div>
          )}
          {videoTime > "17" && (
            <div className="mt-6">
              <h3 className="text-3xl md:text-5xl">
                Most vaping products contain nicotine.
              </h3>
              <Swiper
                className="mt-4"
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                  992: {
                    slidesPerView: 3,
                  },
                }}
                autoplay={{
                  delay: 1000,
                }}
                loop
              >
                <SwiperSlide>
                  <img
                    src={Vape1}
                    alt="vape_product"
                    className="object-cover h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Vape2}
                    alt="vape_product"
                    className="object-cover h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Vape3}
                    alt="vape_product"
                    className="object-cover h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Vape4}
                    alt="vape_product"
                    className="object-cover h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Vape5}
                    alt="vape_product"
                    className="object-cover h-full"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      )}
      {isCaption && <Caption />}
    </>
  );
};

export default SlideTwo;
