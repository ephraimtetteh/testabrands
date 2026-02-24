import React, { useEffect, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Video = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

   useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-linear",
        once: false,
      });
  
    }, []);

    
  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`lg:flex lg:flex-row flex-1 gap-4 lg:w-full items-start justify-center py-20 px-3 md:px-6 lg:px-12 scroll transition-transform duration-200 `}
      data-aos={"zoom-in-up"}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        className="lg:w-full lg:h-[75vh] max-w-full rounded-xl"
        width="620"
      >
        <source src="src/assets/video2.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}

export default Video