import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8 md:py-16 bg-white">
      <div className="max-w-xl w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl text-black font-bold mb-4 md:mb-6">
          Save Big on Your <br />Favorite AI Tools
        </h1>
        <br />
        <p className="text-lg md:text-xl text-gray-500 mb-6 md:mb-8 font-nunito px-4 md:px-0">
          Unlock huge discounts up to 50% off on the hottest artificial intelligence tools!
        </p>
        <Link 
          href="/getstarted" 
          className="px-6 md:px-8 py-3 bg-maincolor text-black rounded-lg hover:bg-yellow-500 transition-colors inline-block"
        >
          Get Started
        </Link>
      </div>
      <div className="relative w-full md:w-1/2">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/illustrations/rosa/guy-with-charts.svg"
            alt="AI Tools illustration"
            width={600}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;