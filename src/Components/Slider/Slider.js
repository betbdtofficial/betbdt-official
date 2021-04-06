import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bmin from "../image/SliderImg/bmin.png";
import cricket from "../image/SliderImg/cricket.png";
import football from "../image/SliderImg/f_ball.png";
import hand_ball from "../image/SliderImg/hand_ball.png";
import hockey from "../image/SliderImg/hockey.png";
import star from "../image/SliderImg/Star.png";
import tnis from "../image/SliderImg/tnis.png";
import vball from "../image/SliderImg/vball.png";
import virtual from "../image/SliderImg/virtual_game.png";
import './Slider.css';

function Sliders() {
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="sliderWrapped">
      <div className="container">
        <Slider {...settings}>
          <div className="sliderItem">
            <div className="sliderImg">
              <a href="#1" data-toggle="tab" id="allGame">
                <img src={star} className="img-fluid" alt="star" />
                <span>All Game</span>
              </a>
            </div>
          </div>
          <div className="sliderItem">
            <div className="sliderImg">
              <a href="#2" data-toggle="tab" id="football">
                <img src={football} className="img-fluid" alt="football" />
                <span>Football</span>
              </a>
            </div>
          </div>
          <div className="sliderItem">
            <div className="sliderImg">
              <a href="#3" data-toggle="tab" id="cricket">
                <img src={cricket} className="img-fluid" alt="cricket" />
                <span>Cricket</span>
              </a>
            </div>
          </div>
          <div className="sliderItem">
            <div className="sliderImg">
              <a href="#4" data-toggle="tab" id="hockey">
                <img src={hockey} className="img-fluid" alt="hockey" />
                <span>Hockey</span>
              </a>
            </div>
          </div>
          <div className="sliderItem">
            <div className="sliderImg">
              <a href="#5" data-toggle="tab" id="tnis">
                <img src={tnis} className="img-fluid" alt="hockey" />
                <span>Tennis</span>
              </a>
            </div>
          </div>
          <div className="sliderItem">
            <div className="sliderImg">
              <a href="#6" data-toggle="tab" id="handBall">
                <img src={hand_ball} className="img-fluid" alt="hand_ball" />
                <span>Hand Ball</span>
              </a>
            </div>
          </div>
          <div className="sliderItem" id="bmin">
            <div className="sliderImg">
              <a href="#7" data-toggle="tab" id="bmin">
                <img src={bmin} className="img-fluid" alt="bmin" />
                <span>Badminton</span>
              </a>
            </div>
          </div>
          <div className="sliderItem" id="vball">
            <div className="sliderImg">
              <a href="#8" data-toggle="tab" id="vball">
                <img src={vball} className="img-fluid" alt="vball" />
                <span>Volly Ball</span>
              </a>
            </div>
          </div>
          <div className="sliderItem" id="virtual">
            <div className="sliderImg">
              <a href="#9" data-toggle="tab" id="virtual">
                <img src={virtual} className="img-fluid" alt="virtual" />
                <span>Virtual Game</span>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;
