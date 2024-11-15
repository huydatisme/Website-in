"use client"

import Image from "next/image";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-60 overflow-hidden pt-[80px] pb-16 md:pt-[120px] md:pb-[60px] xl:pt-[120px] xl:pb-[100px] 2xl:pt-[120px] 2xl:pb-[100px]"
      >
     <div className="relative w-full mx-auto mt-4">
     <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image
      src="/images/Background/background1.jpg"
      alt="background"
      width={1920}
      height={1080}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image
      src="/images/Background/background2.jpg"
      alt="background"
      width={1920}
      height={1080}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
      </div>
    </section>
    </>
  );
};

export default Hero;