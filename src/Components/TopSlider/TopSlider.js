import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../image/Sliderbannar/1.jpg";
import slider2 from "../image/Sliderbannar/2.jpg";
import slider3 from "../image/Sliderbannar/3.jpg";
import "./TopSlider.css";
const TopSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="400px"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TopSlider;
