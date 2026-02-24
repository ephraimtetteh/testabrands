import React from "react";
import { companyLogos } from "../lib/constants/data";

const TrustedBy = () => {
  return (
    <div>
      <h3 className="text-center justify-center items-center lg:py-30 lg:pb-50 lg:text-5xl text-2xl max-w-6xl mx-auto text-gray-900 font-normal px-6">
        We help the world's leading brands create standout ads and campaigns at
        speed—from concept to execution to results.
      </h3>
      <>
        <div className="overflow-hidden w-full relative max-w-9xl mx-auto select-none pb-40">
          <p className="mx-auto items-center justify-center text-center uppercase pb-25">trusted by the world’s BIGGEST brands</p>
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "55s" }}
          >
            <div className="flex">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company}
                  className="w-full h-full object-cover mx-6"
                  draggable={false}
                />
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
        </div>
      </>
    </div>
  );
};

export default TrustedBy;
