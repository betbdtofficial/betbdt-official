import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bmin from "../../image/SliderImg/bmin.png";
import cricket from "../../image/SliderImg/cricket.png";
import fball from "../../image/SliderImg/f_ball.png";
import hand_ball from "../../image/SliderImg/hand_ball.png";
import hockey from "../../image/SliderImg/hockey.png";
import tnis from "../../image/SliderImg/tnis.png";
import vball from "../../image/SliderImg/vball.png";
import virtual from "../../image/SliderImg/virtual_game.png";
import CriLiveAccordion from "./Accordion/CriLiveAccordion";
import CriUpcoming from "./Accordion/CriUpcoming";
import FballLiveAccordion from "./Accordion/FballLiveAccordion";
import FballUpcomingAccordion from "./Accordion/FballUpcomingAccordion";
import "./Slider.css";

function Sliders() {
  return (
    <div className="sliderWrapped">
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>
              <div className="sliderItem">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <div>
                      <img src={cricket} className="img-fluid" alt="cricket" />
                    </div>
                    <span>
                      Cricket
                       {/* <span class="badge badge-warning">40</span>{" "} */}
                    </span>
                  </Link>
                </div>
              </div>
            </Tab>
            <Tab>
              <div className="sliderItem">
                <div className="sliderImg">
                  <Link data-toggle="tabs">
                    <div>
                      <img src={fball} className="img-fluid" alt="football" />
                    </div>
                    <span>
                      Football 
                      {/* <span class="badge badge-warning">25</span>{" "} */}
                    </span>
                  </Link>
                </div>
              </div>
            </Tab>
            <div className="sliderItem">
              <div className="sliderImg">
                <Link data-toggle="tabs">
                  <div>
                    <img src={hockey} className="img-fluid" alt="hockey" />
                  </div>
                  <span>Hockey</span>
                </Link>
              </div>
            </div>
            <div className="sliderItem">
              <div className="sliderImg">
                <Link data-toggle="tabs">
                  <div>
                    <img src={tnis} className="img-fluid" alt="hockey" />
                  </div>
                  <span>Tennis</span>
                </Link>
              </div>
            </div>
            <div className="sliderItem">
              <div className="sliderImg">
                <Link data-toggle="tabs">
                  <div>
                    <img
                      src={hand_ball}
                      className="img-fluid"
                      alt="hand_ball"
                    />
                  </div>
                  <span>Hand Ball</span>
                </Link>
              </div>
            </div>
            <div className="sliderItem" id="bmin">
              <div className="sliderImg">
                <Link data-toggle="tabs">
                  <div>
                    <img src={bmin} className="img-fluid" alt="bmin" />
                  </div>
                  <span>Badminton</span>
                </Link>
              </div>
            </div>
            <div className="sliderItem" id="vball">
              <div className="sliderImg">
                <Link data-toggle="tabs">
                  <div>
                    <img src={vball} className="img-fluid" alt="vball" />
                  </div>
                  <span>Volly Ball</span>
                </Link>
              </div>
            </div>
            <div className="sliderItem" id="virtual">
              <div className="sliderImg">
                <Link>
                  <div>
                    <img src={virtual} className="img-fluid" alt="virtual" />
                  </div>
                  <span>Virtual Game</span>
                </Link>
              </div>
            </div>
          </TabList>
          <div className="liveMatch">
            <span>
              {" "}
              <AiOutlineReload className="icon" /> Live Match{" "}
            </span>
          </div>
          <TabPanel>
            <CriLiveAccordion />
            <CriUpcoming />
          </TabPanel>
          <TabPanel>
            <FballLiveAccordion />
            <FballUpcomingAccordion />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Sliders;
