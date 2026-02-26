import React, { useEffect } from 'react'
import Title from './Title';
import { stats } from '../lib/constants/data';
import AOS from "aos";
import "aos/dist/aos.css";

const Success = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-linear",
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center text-center justify-center text-white pb-10 px-3 lg:px-12">
        <Title
          title={"The best return on your"}
          word={"investment"}
          text={" Made to flex"}
        />
      </div>

      <div className=" w-full px-3 lg:px-12 grid lg:grid-cols-2 gap-12" data-aos='slide-up'>
        {stats.map((stat) => (
          <div className=" text-white">
            <div className="flex items-center justify-between border-gray-500/50 border-b lg:py-5 py-2">
              <div>
                <p className='lg:text-[20px] text-white/50'>{stat.projects}</p>
              </div>
              <div>
                <p className='font-semibold lg:text-7xl text-2xl'>{stat.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Success