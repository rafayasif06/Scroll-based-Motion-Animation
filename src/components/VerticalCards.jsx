import React from "react";

const VerticalCards = () => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];
  
  return (
    <section>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold text-white">Card Title</h2>
          <p className="text-gray-300">Card content goes here.</p>
        </div>
        <div className="flex flex-col gap-y-8 w-[424px] mx-auto bg-[#111] h-[400px] p-1 overflow-hidden relative">
          {/* First set of cards */}
          <div className="flex flex-col gap-y-8 animate-scroll-up">
            {cards.map((card, index) => (
              <div
                key={`first-${index}`}
                className="mx-auto h-40 w-80 bg-blue-700 rounded-xl flex items-center justify-center text-white font-semibold"
              >
                {card}
                
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex flex-col gap-y-8 animate-scroll-up">
            {cards.map((card, index) => (
              <div
                key={`second-${index}`}
                className="mx-auto h-40 w-80 bg-blue-700 rounded-xl flex items-center justify-center text-white font-semibold"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        .animate-scroll-up {
          animation: scroll-up 8s linear ;
        }
      `}</style>
    </section>
  );
};

export default VerticalCards;