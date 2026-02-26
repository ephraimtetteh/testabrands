import { useState } from "react";
import { cardsData } from "../lib/constants/data";
import Title from "./Title";

const ServiceSlide = () => {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <div>
      <div className="text-start items-start justify-start lg:px-12 px-3">
        <Title
          title={"Every type of creative work you'll ever need, "}
          word={"and more"}
          text={" easy & hassle-free "}
          className={"text-start "}
        />
      </div>
      <div
        className="overflow-hidden w-full relative mx-auto lg:py-20"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" /> */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardsData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardsData, ...cardsData].map((card, index) => (
              <div
                key={index}
                className="  w-50 h-70 lg:w-150 mx-2 lg:h-200 relative group hover:scale-90 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="flex group-hover:opacity-100 transition-all duration-300 absolute top-0 items-start justify-center w-full h-full bg-black/20 rounded-2xl p-12">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" /> */}
      </div>
    </div>
  );
};

export default ServiceSlide;
