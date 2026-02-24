import React from 'react'
import Title from './Title';
import Button from './Button';
import { assets } from '../assets/assets';
import { LuFilePenLine } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SiAwsorganizations } from "react-icons/si";
import { FaRegStar } from "react-icons/fa6";

const Process = () => {
  return (
    <div className="flex flex-col flex-1 px-3 lg:px-12 lg:py-20 bg-green-50 overflow-hidden">
      <div className="lg:flex lg:flex-row items-center justify-between flex-1 w-full">
        <div className="">
          <Title
            title={"Tech enabled and made to"}
            word={" Lorem ipsum"}
            text={"easy & hassle-free"}
          />
        </div>
        <div className="">
          <p className="lg:py-12 py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
            minima!
          </p>
          <Button text={"Learn more"} className={"py-4"} />
        </div>
      </div>

      <div className="lg:flex lg:flex-row fle-1 items-start w-full h-full gap-8">
        <div className="lg:w-[70%] flex flex-col gap-8 py-4">
          <div className="lg:flex gap-8 ">
            <div
              className={`bg-center bg-no-repeat bg-cover h-115 w-full rounded-2xl relative mb-4`}
              style={{ backgroundImage: `url(${assets.footerbg})` }}
            >
              <div className="bg-black/5 inset-0 rounded-2xl absolute"></div>
              <div className="absolute top-0 p-8">
                <LuFilePenLine size={32} className="mb-6" />
                <h3 className="text-4xl pb-6">Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eaque ex esse cum voluptatibus dolores fugiat
                  perferendis labore est qui.
                </p>
              </div>
            </div>
            <div
              className={`bg-center bg-no-repeat bg-cover h-115 w-full rounded-2xl relative`}
              style={{ backgroundImage: `url(${assets.footerbg})` }}
            >
              <div className="bg-black/5 inset-0 rounded-2xl absolute"></div>
              <div className="absolute top-0 p-8">
                <IoChatbubblesOutline size={32} className="mb-6" />
                <h3 className="text-4xl pb-6">Lorem ipsum dolor sit.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eaque ex esse cum voluptatibus dolores fugiat
                  perferendis labore est qui.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`bg-center bg-no-repeat bg-cover h-115 w-full rounded-2xl relative`}
            style={{ backgroundImage: `url(${assets.footerbg})` }}
          >
            <div className="bg-black/5 inset-0 rounded-2xl absolute"></div>
            <div className="absolute top-0 p-8">
              <FaRegStar size={32} className="mb-6" />
              <h3 className="text-4xl pb-6">Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus eaque ex esse cum voluptatibus dolores fugiat
                perferendis labore est qui.
              </p>
            </div>
          </div>
        </div>
        {/* -------------------- reight  */}
        <div className="lg:w-[30%] py-4">
          <div
            className={`bg-center bg-no-repeat bg-cover w-full h-screen rounded-2xl relative`}
            style={{ backgroundImage: `url(${assets.footerbg})` }}
          >
            <div className="bg-black/5 inset-0 rounded-2xl absolute"></div>
            <div className="absolute top-0 p-8">
              <SiAwsorganizations size={32} className="mb-6" />
              <h3 className="text-4xl pb-6">Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus eaque ex esse cum voluptatibus dolores fugiat
                perferendis labore est qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process