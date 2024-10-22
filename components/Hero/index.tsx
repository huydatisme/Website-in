"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/images/Background/background1.jpg";
import image2 from "@/public/images/Background/background2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  
];
const Hero = () => {
   // State to keep track of the current image index
   const [currentIndex, setCurrentIndex] = useState<number>(0);

   // State to determine if the image is being hovered over
   const [isHovered, setIsHovered] = useState<boolean>(false);
 
   // Function to show the previous slide
   const prevSlide = (): void => {
     setCurrentIndex(
       (prevIndex) => (prevIndex - 1 + images.length) % images.length
     );
   };
 
   // Function to show the next slide
   const nextSlide = (): void => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };
 
   // useEffect hook to handle automatic slide transition
   useEffect(() => {
     // Start interval for automatic slide change if not hovered
     if (!isHovered) {
       const interval = setInterval(() => {
         nextSlide();
       }, 3000);
 
       // Cleanup the interval on component unmount
       return () => {
         clearInterval(interval);
       };
     }
   }, [isHovered]);
 
   // Handle mouse over event
   const handleMouseOver = (): void => {
     setIsHovered(true);
   };
 
   // Handle mouse leave event
   const handleMouseLeave = (): void => {
     setIsHovered(false);
   };
 
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[80px] pb-16 md:pt-[120px] md:pb-[60px] xl:pt-[120px] xl:pb-[100px] 2xl:pt-[120px] 2xl:pb-[100px]"
      >
     <div className="relative w-full mx-auto mt-4">
        <div
          className="relative h-[460px] mx-12 group hover:-translate-y-2 transition-all duration-300 ease-in-out"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex].src}
              alt={`Slider Image ${currentIndex + 1}`}
              fill
              objectFit="cover"
              className="rounded-xl w-full h-auto transition-all duration-500 ease-in-out cursor-pointer"
              />
          </div>
        </div>

        {/* Left Navigation Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[459px] w-[40px] flex items-center justify-center bg-transparent hover:bg-[#beff46] transition-all duration-300 ease-in-out rounded-l-xl"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Right Navigation Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[459px] w-[40px] flex items-center justify-center bg-transparent hover:bg-[#beff46] transition-all duration-300 ease-in-out rounded-r-xl"
          onClick={nextSlide}
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-[#beff46] rounded-xl"
                  : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;