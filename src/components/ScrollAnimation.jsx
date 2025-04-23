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
  const innerTextY = useTransform(smoothProgress, [0.1, 0.3], ["20%", "-250%"]);
  const innerTextOpacity = useTransform(smoothProgress, [0.1, 0.3], [1, 0]);

  return (
    <section className="bg-stone-950 text-white">
      <div
        ref={containerRef}
        className="w-full h-[200vh] relative overflow-hidden"
      >
        <div className="absolute top-1/4 -translate-y-1/4 left-0  w-full flex items-center justify-center">
          <motion.div
            style={{ scale }}
            className="flex items-center justify-center bg-transparent text-[200px] sm:text-[350px]  lg:text-[500px]  text-white"
          >
            <h2>9</h2>
            <h2 className="relative">
              0
              <motion.p
                style={{
                  y: innerTextY,
                  opacity: innerTextOpacity,
                }}
                className="absolute text-[8px] sm:text-xs  md:text-sm lg:text-lg right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 underline underline-offset-4 opacity font-bold text-nowrap"
              >
                Of Returning <br />
                Customer
              </motion.p>
            </h2>
            <h2 className="relative text-transparent max-w-[110px] sm:max-w-[190px] lg:max-w-[270px] overflow-hidden  ">
              %
              <span className="absolute left-0 bottom-[30%]   translate-y-1/2 font-serif text-6xl sm:text-8xl md:text-[110px] lg:text-[130px]  text-white">
                %
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="absolute top-[100vh] pt-[100px]  md:pt:[140px] lg:pt-[200px] w-full ">
          <div className="flex flex-col text-sm md:text-base lg:text-lg items-center justify-center">
            <span className="pt-2 ">Over 1500 Projects Completed</span>
            <AnimatedText />
          </div>
        </div>
      </div>
    </section>
  );
};

// import React, { useRef, useState, useEffect } from "react";
// import { motion, useTransform, useScroll, useSpring } from "framer-motion";
// import { AnimatedText } from "./AnimatedText";

// export const ScrollAnimation = () => {
//   const containerRef = useRef(null);
//   const [isPinned, setIsPinned] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   // Animation for the 909 scale that starts after text animation is complete
//   const scale = useTransform(
//     smoothProgress,
//     [0.1, 0.3, 0.5, 1],
//     [1, 1, 5, 20] // Stays at scale 1 until 0.3 progress, then scales up
//   );

//   // Animations for the inner text - moves up and fades out
//   const innerTextY = useTransform(smoothProgress, [0.1, 0.3], ["0%", "-250%"]);
//   const innerTextOpacity = useTransform(smoothProgress, [0.1, 0.3], [1, 0]);

//   // Monitor scroll progress for pinning
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.onChange((value) => {
//       // Pin the element when scrollProgress is between 0.1 and 0.3
//       // (during the "Of Returning Customer" text animation)
//       if (value >= 0.1 && value <= 0.3) {
//         setIsPinned(true);
//       } else {
//         setIsPinned(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <section className="bg-stone-950 text-white">
//       <div
//         ref={containerRef}
//         className="w-full h-[200vh] relative overflow-hidden"
//       >
//         <motion.div
//           className="relative w-full"
//           style={{
//             position: isPinned ? "fixed" : "absolute",
//             top: isPinned ? "25%" : "25%",
//             translateY: "-25%",
//             left: 0,
//             width: "100%",
//             zIndex: 10,
//           }}
//         >
//           <motion.div
//             style={{ scale }}
//             className="flex items-center justify-center bg-transparent text-[200px] sm:text-[300px] lg:text-[400px] text-white"
//           >
//             <h2>9</h2>
//             <h2 className="relative">
//               0
//               <motion.p
//                 style={{
//                   y: innerTextY,
//                   opacity: innerTextOpacity,
//                 }}
//                 className="absolute text-[8px] sm:text-xs md:text-sm lg:text-base right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 underline font-bold text-nowrap"
//               >
//                 Of Returning <br />
//                 Customer
//               </motion.p>
//             </h2>
//             <h2>9</h2>
//           </motion.div>
//         </motion.div>

//         <div className="absolute top-[100vh] pt-[100px] md:pt-[140px] lg:pt-[200px] w-full">
//           <div className="flex flex-col text-sm md:text-base items-center justify-center">
//             <span className="pt-2">Over 1500 Projects Completed</span>
//             <AnimatedText />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
