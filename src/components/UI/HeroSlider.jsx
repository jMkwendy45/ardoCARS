import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows:false
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt-60">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Trade Your current vehicle</h4>
            <h1 className="text-light mb-4">Contact us Now</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>`
          <div className="slider__content ">
            <h4 className="text-light mb-3">Stay up to date </h4>
            <h1 className="text-light mb-4">Experience your favorite</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Buy now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Find the perfect vehicle</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 10% Off</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
