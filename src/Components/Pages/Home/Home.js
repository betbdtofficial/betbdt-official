import React from 'react';
import TopSlider from '../../TopSlider/TopSlider';
import Sliders from '../Slider/Slider';
import Topnotice from '../Topnotice/Topnotice';

const Home = () => {
    return (
        <div>
          <Topnotice></Topnotice>
          <TopSlider></TopSlider>
          <Sliders/>
        </div>
    );
};

export default Home;