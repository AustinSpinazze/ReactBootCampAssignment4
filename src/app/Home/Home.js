import React from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeeklyForecast from '../WeeklyForceast/WeeklyForecast';

import './home.css';

const Home = () => {
    return (
        <div className="content">
            <div className="main-container">
                <CurrentWeather />
                <WeeklyForecast />
            </div>
        </div>
    )
}

export default Home;
