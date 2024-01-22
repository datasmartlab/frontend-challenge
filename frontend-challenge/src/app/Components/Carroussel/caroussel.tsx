"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import {  } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import "swiper/css/autoplay"
import Image from "next/image";

export const Caroussel = ({ Images, alterIndex }: any) => {
    
  return (
    <>
      <Swiper
        effect={"cards"}
        modules={[Navigation, EffectCards]}
        className="mySwiper"
        onRealIndexChange={(index) => alterIndex(index.activeIndex)}
        style={{
          height: "200px",
          width: "200px",
          position: "absolute",
          bottom:'20px',
        }}
      >
        {Images.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <Image src={image.Image} alt="hero image" priority quality={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
