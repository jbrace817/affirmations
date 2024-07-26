import React, { useState, useRef } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const toSlide = (num) => {
    setCurrentSlide(num);
    console.log('go to slide', num);
    swiperRef.current?.swiper.slideTo(num);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  console.log(currentSlide);
  return (
    <div className="main">
      <div className="slide">
        <div className="container">
          <Swiper
            ref={swiperRef}
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            // initialSlide={Number(localStorage.getItem('slide'))}
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiperCore) => {
              const { activeIndex } = swiperCore;
              setCurrentSlide(activeIndex);
            }}
            onSwiper={(swiper) => swiper.slideTo(currentSlide, 500)}
          >
            {affirmations.map((affirmation) => (
              <SwiperSlide key={affirmation.id}>
                <Affirmation affirmation={affirmation} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <input
          value={currentSlide < 9 ? currentSlide + 1 : currentSlide + 1}
          onChange={(e) => toSlide(Number(e.target.value - 1))}
          type="number"
          max={affirmations.length}
          min={1}
          onFocus={handleFocus}
        />
        <p>of {affirmations.length}</p>
      </div>
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
