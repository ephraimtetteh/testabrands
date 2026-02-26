import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import Title from './Title';
import AOS from "aos";
import "aos/dist/aos.css";

const BrandUse = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-linear",
          once: false,
        });
    
      }, []);
  return (
    <div className="flex flex-col items-center gap-8 pb-20">
      {/* {
        works.map((work,index) => (
          <div key={index} className={`flex-col flex items-center gap-8 ${index % 2 === 0 ?'flex-row': 'flex-row-reverse'}`}>
            <div className='basis-1/2'>
              <img src={work.image} alt="" />
            </div>
          </div>
        ))
      } */}
      <div className="text-start items-start justify-start lg:px-12 px-3">
        <Title
          title={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          text={"our work"}
          className={"text-start"}
        />
      </div>

      <div
        className="lg:flex lg:flex-row flex-1 gap-6 w-full px-3 md:px-6 lg:px-12 text-white"
        data-aos="slide-up"
      >
        <div className="basis-1/2">
          <img
            src={assets.work2}
            alt=""
            className="h-90 w-full rounded-2xl hover:scale-105 transition duration-300"
          />
          <h3 className="pt-4 text-2xl italic">Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="basis-1/3">
          <img
            src={assets.work3}
            alt=""
            className="h-90 w-full rounded-2xl hover:scale-90 transition duration-300"
          />
          <h3 className="pt-4 text-2xl italic">Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="basis-1/3">
          <img
            src={assets.work4}
            alt=""
            className="h-90 w-full rounded-2xl hover:scale-90 transition duration-300"
          />
          <h3 className="pt-4 text-2xl italic">Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>

      <div
        className="lg:flex lg:flex-row flex-1 gap-6 w-full px-3 md:px-6 lg:px-12"
        data-aos="slide-up"
      >
        <div className="basis-1/3">
          <img
            src={assets.work3}
            alt=""
            className="h-90 w-full rounded-2xl hover:scale-90 transition duration-300"
          />
          <h3 className="pt-4 text-2xl italic">Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="basis-1/3">
          <img
            src={assets.work4}
            alt=""
            className="h-90 w-full rounded-2xl hover:scale-90 transition duration-300"
          />
          <h3 className="pt-4 text-2xl italic">Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="basis-1/2">
          <img
            src={assets.work2}
            alt=""
            className="h-90 w-full rounded-2xl hover:scale-105 transition duration-300"
          />
          <h3 className="pt-4 text-2xl italic">Lorem.</h3>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
}

export default BrandUse