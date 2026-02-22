import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Works = ({image, className, name, company}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-linear",
      once: false,
    });

  }, []);
  return (
    <div className={`${className} relative w-full overflow-hidden`}>
      {/* Image */}
      <div className="w-full">{image}</div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Centered Content */}
      {/* <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
        data-aos="slide-up"
        data-aos-delay="300"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          {company}
        </h1>

        <p className="text-lg md:text-xl max-w-xl">{name}</p>
      </div> */}
      <div
        className="absolute bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-12 w-full text-left"
        data-aos="slide-up"
        data-aos-delay="300"
      >
        <h3 className="text-5xl font-medium text-white">{company}</h3>
        <p className="text-sm text-white/80">{name}</p>
      </div>
    </div>
  );
}

export default Works