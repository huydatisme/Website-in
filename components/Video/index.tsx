"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Máy móc hiện đại"
          paragraph="Hệ thống nhà xưởng được trang bị đầy đủ các loại máy in, máy cán hàng, máy bế dán tự động,... vô cùng hiện đại để phục vụ quy trình in khép kín"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
              <div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src="/images/device/device1.jpg" />
  </div>
  <div className="diff-item-2">
    <img
      alt="daisy"
      src="/images/device/device2.jpg" />
  </div>
  <div className="diff-resizer"></div>
</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Video;