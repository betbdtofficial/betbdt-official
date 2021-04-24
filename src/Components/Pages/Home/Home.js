import React from 'react';
import MyLoader from '../Slider/Accordion/MyLoader';
import Sliders from '../Slider/Slider';
import Topnotice from '../Topnotice/Topnotice';

const Home = () => {
    return (
        <div>
          <Topnotice></Topnotice>
          <Sliders/>
          <MyLoader></MyLoader>
        </div>
    );
};

export default Home;