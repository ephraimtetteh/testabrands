import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Title = ({ className, text, title, word }) => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-linear",
        once: false,
      });
  
    }, []);
  return (
    <div
      className={`lg:w-[70%] lg:mt-40 mt-20`}
      data-aos="slide-up"
    >
      <p className="pb-4 uppercase sm:text-[14px]">{text}</p>
      <h1
        className={` ${className} pb-6 lg:text-6xl text-2xl `}
      >
        {title}{" "}
        <span className="italic lg:text-6xl text-2xl ">{word}</span>
      </h1>
    </div>
  );
}

export default Title