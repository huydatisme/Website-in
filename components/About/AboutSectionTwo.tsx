"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useState, useEffect } from "react";
const AboutSectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/products/tem/4.png",
    "/images/products/catalogue-01.jpg",
    "/images/products/phongbi/phongbi2.png",
    "/images/products/lichtet.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, [images.length]);
    return (
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Dịch vụ thiết kế"
            paragraph=""
            center
            mb="80px"
          />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item w-full h-full ${
                        index === currentIndex ? "block" : "hidden"
                      }`}
                    >
                      <img
                        src={image}
                        className="w-full h-full object-cover rounded-box"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                     Thiết kế tem
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Thiết kế tem nhãn mác, tem bảo hành, tem chống hàng giả, tem hologram, tem bảy màu theo yêu cầu
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Thiết kế xây dựng bộ nhận diện thương hiệu cho công ty
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Thiết kế logo, name card, bao bì, catalogue, phong bì cho công ty, start-up, doanh nghiệp,...
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                     Thiết kế lịch, hộp quà
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Thiết kế các loại lịch âm, dương, các loại bao bì hộp quà Tết, quà tặng theo yêu cầu                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default AboutSectionTwo;
