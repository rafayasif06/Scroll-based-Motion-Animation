

import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

export const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  
  // Animation for the 909 scale
  const scale = useTransform(smoothProgress, [0.2, 1], [1, 20]);
  
  // Animations for the inner text - moves up and fades out
  const innerTextY = useTransform(smoothProgress, [0.1, 0.3], ["0%", "-250%"]);
  const innerTextOpacity = useTransform(smoothProgress, [0.1, 0.3], [1, 0]);

  return (
    <section className="bg-stone-950 text-white">
      <div
        ref={containerRef}
        className="w-full h-[200vh] relative overflow-hidden"
      >
        <div className="fixed top-0 left-0  w-full flex items-center justify-center">
          <motion.div
            style={{ scale }}
            className="flex items-center justify-center bg-transparent text-[400px] text-white"
          >
            <h2>9</h2>
            <h2 className="relative">
              0
              <motion.p 
                style={{ 
                  y: innerTextY,
                  opacity: innerTextOpacity
                }}
                className="absolute text-sm lg:text-base right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 underline font-bold text-nowrap"
              >
                Of Returning <br />
                Customer
              </motion.p>
            </h2>
            <h2>9</h2>
          </motion.div>
        </div>

        <div className="absolute top-[100vh] pt-[200px] w-full ">
          <div className="flex flex-col items-center justify-center">
            <span className="pt-2">Over 1500 Projects Completed</span>
            <AnimatedText />
          </div>
        </div>
      </div>
    </section>
  );
};

