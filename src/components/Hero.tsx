import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container m-auto flex flex-col md:flex-row items-center justify-between py-14 md:py-20 gap-14 md:px-0 px-12">
      {/* TEXT SIDE */}
      <div className="max-w-xl w-full md:w-2/5 text-center md:text-left h-full flex flex-col gap-12 md:gap-16">

        {/* HERO TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-10 sm:leading-7"> 
          Save Big on Your Favorite AI Tools
        </h1>

        {/* HERO SUBTITLE */}
        <p className="text-2xl md:text-3xl text-gray-500 font-nunito">
          Unlock huge discounts up to 50% off on the hottest artificial intelligence tools!
        </p>

        {/* CALL TO ACTION */}
        <div>
        <Link href="/getstarted" className="px-6 md:px-8 py-4 bg-color-primary rounded-lg font-extrabold">Get Started</Link>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="w-full md:w-3/5 p-2">
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