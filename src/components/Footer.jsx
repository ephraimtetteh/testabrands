import React from "react";
import { Link, Links } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { assets } from "../assets/assets";
import Button from "./Button";
import {
  aiServices,
  creativeDesigns,
  marketingServices,
  productionServices,
} from "../lib/constants/data";
import { ArrowUpRight } from "../icons";
import { legal, navLinks } from "../lib/constants/links";


const GetFullYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <footer
      className="relative bg-no-repeat bg-cover bg-center flex-1 min-h-screen text-white"
      style={{ backgroundImage: `url(${assets.footerbg})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/40"></div>

      <div className="flex flex-col items-center justify-center lg:pt-40 lg:pb-20 pt-20 pb-10">
        <h1 className="lg:text-7xl text-2xl text-white z-10">
          Testa Company Limited
        </h1>
        <p className="z-10 lg:text-2xl pb-2">
          Creative Powerhouse Strategy & Design
        </p>
        <Button text={"Let's Talk"} />
      </div>

      <div className=" bg-linear-to-b from-black/40  to-black py-8">
        <div className="lg:flex flex-1 gap-20 px-3 md:px-6 lg:px-12 xl:px-12 transition-all duration-500 z-10">
          {/* left side */}
          <div className=" w-full border-t border-white/50 z-10">
            <h3 className=" pt-4 lg:pb-10 pb-5 text-2xl">Services</h3>
            <div className="flex flex-row gap-10">
              <div className="">
                <a href={"/"} className="flex items-center gap-3">
                  <h4 className="text-[20px] py-1">Creative Design Services</h4>
                  <ArrowUpRight />
                </a>
                {creativeDesigns.map((item) => (
                  <p
                    key={item.length}
                    className="py-2 font-light text-[16px] text-white/80"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <a href={"/"} className="lg:flex items-center gap-3">
                  <h4 className="text-[20px] py-1">
                    Specialized Production Services
                  </h4>
                  <ArrowUpRight />
                </a>
                {productionServices.map((item) => (
                  <p
                    key={item.length}
                    className="py-2 font-light text-[16px] text-white/80"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className=" w-full border-t border-white/50 z-10">
            <h3 className=" pt-4 lg:pb-10 pb-5 text-2xl">Navigation</h3>
            <div className="flex flex-row gap-10">
              <div className="">
                <a href={"/"} className="flex items-center gap-3">
                  <h4 className="lg:text-[20px] py-1">Main</h4>
                  <ArrowUpRight />
                </a>
                {navLinks.map((item) => (
                  <p
                    key={item.length}
                    className="py-2 font-light text-[16px] text-white/80"
                  >
                    {item.name}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-10 z-10">
                <div>
                  <a href={"/"} className="flex items-center gap-3">
                    <h4 className="lg:text-[20px] py-1">AI Services</h4>
                    <ArrowUpRight />
                  </a>
                  {aiServices.map((item) => (
                    <p
                      key={item.length}
                      className="py-2 font-light text-[16px] text-white/80"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <div>
                  <a href={"/"} className="flex items-center gap-3">
                    <h4 className="lg:text-[20px] py-1">Marketing Services</h4>
                    <ArrowUpRight />
                  </a>
                  {marketingServices.map((item) => (
                    <p
                      key={item.length}
                      className="py-2 font-light text-[16px] text-white/80"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-between py-2 px-3 md:px-6 lg:px-12 xl:px-12  text-center z-10">
          <div>
            <img src={assets.logo} alt="" className="invert" />
            &copy; copyright <GetFullYear />, Testa Brands.
          </div>
          <div className="z-10 flex items-center gap-2 justify-center">
            {legal.map((item) => (
              <p
                key={item.length}
                className="py-2 font-light text-[16px] text-white/80 underline"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="z-20 flex flex-row gap-3 items-center justify-center">
            <FaFacebookF
              size={52}
              className="rounded-full p-3 border border-white"
            />
            <FaInstagram
              size={52}
              className="rounded-full p-3 border border-white"
            />
            <FaLinkedinIn
              size={52}
              className="rounded-full p-3 border border-white"
            />
            <FaTwitter
              size={52}
              className="rounded-full p-3 border border-white"
            />
            <img src={assets.logo} alt="" className="invert size-20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
