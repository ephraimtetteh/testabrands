import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Title from './Title';
import { works } from '../assets/assets';
import Works from './Works';
import Success from './Success';

const Flex = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-linear",
        once: false,
      });
    }, []);

  return (
    <div className="bg-black/90 flex flex-col lg:pb-40 pb-10">
      <div className="px-3 md:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center text-white pb-10">
          <Title
            title={` Supertalented. Superfast. Super responsive. Work with a global team that’s purposefully`
              
            }
            word={"made to keep up with you."}
            text={" Made to flex"}
            className={'text-2xl'}
          />
        </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-3">
        {works.slice(0,3).map((work, index) => (
          <Works
            key={index}
            image={
              <img
                src={work.image}
                alt=""
                className="w-full h-200 object-cover rounded-2xl"
                draggable="false"
              />
            }
            name={work.description}
            company={work.company}
          />
        ))}
      </div>
      </div>
      <Success />
    </div>
  );
}

export default Flex