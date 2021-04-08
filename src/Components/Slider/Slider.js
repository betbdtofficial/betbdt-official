import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { AiOutlineSync } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
import FballLiveAccordion from "./Accordion/FballLiveAccordion";
import FballUpcomingAccordion from "./Accordion/FballUpcomingAccordion";
import "./Slider.css";

function Sliders() {
  // const settings = {
  //   arrow: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="sliderWrapped">
      <div className="container">
        <Tabs>
          {/* <OwlCarousel items="6" autoplay> */}
            <TabList>
              <Tab>
                <div className="sliderItem">
                  <div className="sliderImg">
                    <Link data-toggle="tabs">
                      <img src={star} className="img-fluid" alt="star" />
                      <span>
                        All Game <span class="badge badge-warning">65</span>{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="sliderItem">
                  <div className="sliderImg">
                    <Link data-toggle="tabs">
                      <img
                        src={football}
                        className="img-fluid"
                        alt="football"
                      />
                      <span>
                        Football <span class="badge badge-warning">25</span>{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </Tab>
              <div className="sliderItem">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <img src={cricket} className="img-fluid" alt="cricket" />
                    <span>
                      Cricket <span class="badge badge-warning">40</span>{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <img src={hockey} className="img-fluid" alt="hockey" />
                    <span>Hockey</span>
                  </Link>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <img src={tnis} className="img-fluid" alt="hockey" />
                    <span>Tennis</span>
                  </Link>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <img
                      src={hand_ball}
                      className="img-fluid"
                      alt="hand_ball"
                    />
                    <span>Hand Ball</span>
                  </Link>
                </div>
              </div>
              <div className="sliderItem" id="bmin">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <img src={bmin} className="img-fluid" alt="bmin" />
                    <span>Badminton</span>
                  </Link>
                </div>
              </div>
              <div className="sliderItem" id="vball">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <img src={vball} className="img-fluid" alt="vball" />
                    <span>Volly Ball</span>
                  </Link>
                </div>
              </div>
              <div className="sliderItem" id="virtual">
                <div className="sliderImg">
                  <Link>
                    <img src={virtual} className="img-fluid" alt="virtual" />
                    <span>Virtual Game</span>
                  </Link>
                </div>
              </div>
            </TabList>
          {/* </OwlCarousel> */}
          <div className="liveMatch">
            <span>
              {" "}
              <AiOutlineSync /> Live Match{" "}
            </span>
          </div>
          <TabPanel>
            <FballLiveAccordion />
            <FballUpcomingAccordion />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Sliders;
