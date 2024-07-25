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

import affirmations from './data';

export default function App() {
  return (
    <div className="container">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        initialSlide={1}
      >
        {affirmations.map((affirmation) => (
          <SwiperSlide key={affirmation.id}>
            <Affirmation affirmation={affirmation} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Affirmation({ affirmation }) {
  return (
    <>
      <span className="center display-4 fw-normal fst-italic text-muted">
        {affirmation.affirmation}
      </span>
      <img
        src={`https://picsum.photos/seed/slide${affirmation.id}/1920/1080`}
        alt={`Slide ${affirmation.id}`}
        className="img-fluid"
      />
    </>
  );
}
