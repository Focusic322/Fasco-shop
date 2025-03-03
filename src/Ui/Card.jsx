import React, { useState } from 'react';

export default function Card({ title, discount, img, sold, price, color1, color2, color3 }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div>
      <div>
        <div className="relative hover:opacity-85 duration-500">
        <img src={img} alt={title} className="rounded-md"/>
        {sold && (
          <div className="absolute top-[180px] left-[124px] text-white text-lg pl-[16px] pt-2 font-medium bg-Gray rounded-full w-[74px] h-[74px]">
            {sold}
          </div>
        )}
         </div>
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex items-center font-medium">
            <span className="text-lg pt-2">{price}</span>
            <span className="text-lg pt-2 pl-4 line-through">{discount}</span>
          </div>
          <div className="flex gap-2 pt-4">
            <button
              onClick={() => handleActive(1)}
              className={`${color1} ${activeIndex === 1 ? "ring-offset-4 ring-1 ring-black" : "ring-0"} w-[30px] h-[30px] rounded-full`}
            ></button>
            <button
              onClick={() => handleActive(2)}
              className={`${color2} ${activeIndex === 2 ? "ring-offset-4 ring-1 ring-black" : "ring-0"} w-[30px] h-[30px] rounded-full`}
            ></button>
            <button
              onClick={() => handleActive(3)}
              className={`${color3} ${activeIndex === 3 ? "ring-offset-4 ring-1 ring-black" : "ring-0"} w-[30px] h-[30px] rounded-full`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
