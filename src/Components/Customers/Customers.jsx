import React, { useState } from "react";
import Photo from "./../../Img/People/Photo.svg";

const testimonials = [
  {
    id: 1,
    name: "James K.",
    role: "Traveler",
    rating: 5,
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },
  {
    id: 2,
    name: "Sarah L.",
    role: "Designer",
    rating: 5,
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },
  {
    id: 3,
    name: "John W.",
    role: "Developer",
    rating: 5,
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },
];

export default function Customers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center">
          <h2 className="flex justify-center text-4xl font-medium pb-4">
            This Is What Our Customers Say
          </h2>
          <p className="flex justify-center text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
          </p>
        </div>

        <div className="mt-8 relative overflow-hidden h-56">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
                currentIndex === index
                  ? "opacity-100 scale-100 translate-x-0"
                  : direction === "next"
                  ? "opacity-0 scale-95 -translate-x-full"
                  : "opacity-0 scale-95 translate-x-full"
              }`}
            >
              <div className="p-6">
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                  <img
                    src={Photo}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mr-6"
                  />
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="mb-2 flex">
                      {Array(testimonial.rating)
                        .fill()
                        .map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className="text-yellow text-xl"
                          >
                            ★
                          </span>
                        ))}
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
