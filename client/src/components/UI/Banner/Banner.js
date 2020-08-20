import React from 'react';
import './Banner.css';
import Slider from 'infinite-react-carousel';

const Banner = () => (
  <Slider autoplay={true} arrows={false}>
    <div>
      <img
        className="banner"
        src="https://wallpapercave.com/wp/wp2402523.jpg"
        alt="dog"
      />
    </div>
    <div>
      <img
        className="banner"
        src="https://wallpaperaccess.com/full/266689.jpg"
        alt="dog"
      />
    </div>
  </Slider>
);

export default Banner;
