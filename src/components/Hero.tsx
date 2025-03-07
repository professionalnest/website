import React from "react";
import Image from "next/image";
import { HeroComponentLabels } from "@/models/UIInterfaces";
import C2AButton from "./C2AButton";

const Hero = ({labels}: {labels:HeroComponentLabels}) => {
  return (
    <div className="container m-auto flex flex-col md:flex-row items-center justify-between py-14 md:py-20 gap-14 px-12">
      {/* TEXT SIDE */}
      <div className="h-full w-full text-center mx-auto lg:text-left lg:w-3/5 max-w-2xl flex flex-col gap-12 md:gap-16">

        {/* HERO TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-10 sm:leading-7"> 
          {labels.title}
        </h1>

        {/* HERO SUBTITLE */}
        <p className="text-2xl md:text-3xl text-gray-500 font-nunito">
          {labels.subtitle}
        </p>

        {/* CALL TO ACTION */}
        <div>
          <C2AButton />
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="p-2 hidden lg:block lg:w-2/5 ">
        <div className="h-full justify-self-end">
          <Image
            src="/illustrations/guy-with-charts.svg"
            alt="Illustration for Hero Section"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;