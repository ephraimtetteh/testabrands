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
      className={`${className} w-[70%] mt-40 items-center justify-center text-center`}
    >
      <p className="pb-4" data-aos="slide-up">
        {text}
      </p>
      <h1 className="pb-6 text-7xl" data-aos="slide-up" data-aos-delay="300">
        {title} <br /> <span className="italic text-5xl">{word}</span>
      </h1>
    </div>
  );
}

export default Title