import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import car1 from "../../assets/img1.png";
import car2 from "../../assets/img2.png";
import car3 from "../../assets/img3.png";

export default function CarsSlider() {
  // نكرر الصور عشان loop يشتغل تمام
  const images = [car1, car2, car3, car1, car2, car3];

  return (
    <div className="w-full max-w-6xl  my-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10} 
        slidesPerView={4} 
        loop={true}       // تكرار الصور
        autoplay={{ delay: 300, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },  // موبايل
          640: { slidesPerView: 2, spaceBetween: 25 },  // تابلت صغير
          1024: { slidesPerView: 3, spaceBetween: 30 }, // شاشة كبيرة
          1280: { slidesPerView: 4, spaceBetween: 40 }, // شاشة أكبر
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Car ${index + 1}`}
              className="w-[250px] h-[160px] object-cover rounded-lg mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
