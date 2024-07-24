import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './index.css';

// Import required modules
import { Navigation } from 'swiper/modules';

//Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="container">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <span className="center">Slide 1</span>
          <img
            src="https://picsum.photos/seed/slide1/1920/1080"
            alt="Slide 1"
            className="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <span className="center">Slide 2</span>
          <img
            src="https://picsum.photos/seed/slide2/1920/1080"
            alt="Slide 2"
            className="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <span className="center">Slide 3</span>
          <img
            src="https://picsum.photos/seed/slide3/1920/1080"
            alt="Slide 3"
            className="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide>
          <span className="center">Slide 4</span>
          <img
            src="https://picsum.photos/seed/slide4/1920/1080"
            alt="Slide 4"
            className="img-fluid"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
