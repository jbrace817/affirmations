// import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './index.css';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

//Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

//Import Data
import affirmations from './data';

export default function App() {
  // const today = new Date('7/25/2024').toLocaleDateString();
  if (!localStorage.getItem('date')) {
    localStorage.setItem('date', new Date().toLocaleDateString());
    localStorage.setItem('slide', 0);
  } else if (localStorage.getItem('date') !== new Date().toLocaleDateString()) {
    localStorage.setItem('date', new Date().toLocaleDateString());
    const savedSlide = localStorage.getItem('slide');
    localStorage.setItem('slide', Number(savedSlide) + 1);
    if (Number(localStorage.getItem('slide')) === affirmations.length) {
      localStorage.setItem('slide', 0);
    }
  }

  return (
    <div className="container">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        initialSlide={Number(localStorage.getItem('slide'))}
        autoplay={{ delay: 5000 }}
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
      <h1 className="center fw-normal fst-italic text-muted ">
        {affirmation.affirmation}
      </h1>
      <img
        src={`https://picsum.photos/seed/slide${affirmation.id}/1920/1080`}
        alt={`Slide ${affirmation.id}`}
        className="img-fluid"
      />
    </>
  );
}
