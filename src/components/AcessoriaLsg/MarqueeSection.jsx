"use client";

import React from "react";

const MarqueeSection = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div className="text-center text-[#ff6f61] text-lg font-bold">Sem itens para exibir</div>;
  }

  return (
    <div className="relative overflow-hidden bg-black text-white py-8">
      <div className="relative z-10 flex whitespace-nowrap animate-marquee-smooth">
        {items.map((item, index) => (
          <span
            key={index}
            className={`
              mx-6 sm:mx-10 text-2xl sm:text-4xl font-bold tracking-wider uppercase 
              transition duration-500 ease-in-out 
              hover:text-[#ff6f61] hover:scale-105 
              ${item === '"use client"' ? 'bg-[#ff6f61] text-black px-3 py-1 rounded-lg' : ''}
            `}
            aria-hidden="true"
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`repeat-${index}`}
            className={`
              mx-6 sm:mx-10 text-2xl sm:text-4xl font-bold tracking-wider uppercase 
              transition duration-500 ease-in-out 
              hover:text-[#ff6f61] hover:scale-105 
              ${item === '"use client"' ? 'bg-[#ff6f61] text-black px-3 py-1 rounded-lg' : ''}
            `}
            aria-hidden="true"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;