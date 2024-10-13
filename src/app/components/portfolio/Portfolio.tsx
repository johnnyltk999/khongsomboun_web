import React, { useState } from "react";
import Image from "next/image";
import { PortfolioData } from "./PortfolioData";

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? PortfolioData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === PortfolioData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="portfolio">
      <div className="relative w-full max-w-5xl mx-auto my-10 p-4">
        {/* Title */}
        <h1 className="text-red-600 text-3xl font-bold text-center m-14">
          ຜົນງານທີ່ຜ່ານມາ
        </h1>

        {/* Pagination */}
        <div className="text-center mt-4 text-gray-500 mb-5">
          {currentIndex + 1} / {PortfolioData.length}
        </div>

        {/* Slide Section */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={PortfolioData[currentIndex].image}
              alt={PortfolioData[currentIndex].title}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-12 mt-4 md:mt-0">
            <h2 className="text-xl font-bold">
              {PortfolioData[currentIndex].title}
            </h2>
            <div className="border-b-4 border-primaryBase w-50 mt-2"></div>
            <p className="mt-2 text-gray-600">
              {PortfolioData[currentIndex].description}
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <button
                className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                onClick={handlePrev}
              >
                ←
              </button>
              <button
                className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                onClick={handleNext}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {PortfolioData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-primaryBase" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;
