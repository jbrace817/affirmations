//Import useState hook from React
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//Import Styles
import './index.css';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

//Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

//Import Bootstrap Form
import Form from 'react-bootstrap/Form';

//Import Data
import affirmations from './data';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  console.log(autoplay);
  const toSlide = (num) => {
    setCurrentSlide(num);
    console.log('go to slide', num);
    swiperRef.slideTo(num);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleAutoPlay = () => {
    setAutoplay((play) => !play);
    autoplay ? swiperRef.autoplay.stop() : swiperRef.autoplay.start();
  };

  return (
    <div className="main">
      <div className="slide">
        <div className="container">
          <Form.Check
            type="switch"
            defaultChecked={autoplay}
            onClick={handleAutoPlay}
            className="autoplay"
            label="Autoplay"
            reverse
          />
        </div>
        <div className="container">
          <Swiper
            ref={swiperRef}
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiperCore) => {
              const { activeIndex } = swiperCore;
              setCurrentSlide(activeIndex);
            }}
            onSwiper={setSwiperRef}
          >
            {affirmations.map((affirmation) => (
              <SwiperSlide key={affirmation.id}>
                <Affirmation affirmation={affirmation} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="indicator">
          <input
            value={currentSlide + 1}
            onChange={(e) => toSlide(Number(e.target.value - 1))}
            type="number"
            max={affirmations.length}
            min={0}
            onFocus={handleFocus}
          />
          <span>of {affirmations.length}</span>
        </div>
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
