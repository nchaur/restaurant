import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CAROUSEL } from "../shared/CAROUSEL";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper";

const CustomCarousel = () => {
  const carousel = CAROUSEL;

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cardsEffect="cover"
        navigation={true}
        spaceBetween={4}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {carousel.map((item) => (
          <>
            <SwiperSlide key={item.src} title={item.caption}>
              <img src={item.src} alt={item.altText} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};
export default CustomCarousel;
