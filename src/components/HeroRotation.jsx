import React from "react";
import HeroPart1 from "../assets/HeroPart1.svg";
import HeroPart2 from "../assets/HeroPart2.svg";
import { SvgAnimation } from "./SvgAnimation";
const HeroRotation = () => {
  return (
    <section className=" flex items-center justify-center h-screen w-full ">
      <div className="relative w-full  bg-[#111] flex items-center justify-center  overflow-visible">
        <SvgAnimation />
      </div>
    </section>
  );
};

export default HeroRotation;
