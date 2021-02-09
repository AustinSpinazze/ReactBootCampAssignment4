import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import { currentWeather } from '../../shared/constants';
import './currentWeather.css';

const CurrentWeather = () => {
    return (
        <div className="current-weather-container">
            <div className="col">
                {currentWeather.city}, {currentWeather.state}
            </div>
            <div className="col">
                <div className="icon">
                    <FontAwesomeIcon icon={faSun} size="3x"/>
                    {currentWeather.weatherConditions}
                </div>
            </div>
            <div className="col">
                {currentWeather.currentTemp} <span>&#176;</span>
            </div>
        </div>
    )
}

export default CurrentWeather;
