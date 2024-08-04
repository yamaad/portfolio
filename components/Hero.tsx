"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BorderMagicButton } from "./ui/BorderMagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div className="h-screen w-full  dark:bg-grid-orange-200/[0.1] bg-grid-black/[0.1]  flex items-center justify-center absolute top-0 left-06 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] "></div>
        <div className="flex justify-center relative my-20 ">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vwh] flex flex-col item-center justify-center ">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">dynamic web magic with Next.Js</h2>
            <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts into Seamless Experiences" />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xxl">
              Hi I&apos;m Maad, a full stack developer based in Kuala Lumpur
            </p>
            <a href="#about">
              <BorderMagicButton title="show off" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
