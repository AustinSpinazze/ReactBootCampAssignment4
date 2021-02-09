import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faCloud } from '@fortawesome/free-solid-svg-icons';

import { weeklyForecast } from '../../shared/constants';
import './weeklyForecast.css';

const WeeklyForecast = () => {
    return (
        <div className="weekly-forecast-container">
            {weeklyForecast.map((item) => {
                return (
                    <div key={item.dayOfTheWeek} className="col">
                        <div className="content">
                            <div className="row">
                                {item.dayOfTheWeek}
                            </div>
                            <div className="row">
                                {item.weatherConditions === "Sunny" ? <FontAwesomeIcon icon={faSun} /> :
                                    (item.weatherConditions === "Rainy" ? <FontAwesomeIcon icon={faCloudRain} /> :
                                        (item.weatherConditions === "Cloudy" ? <FontAwesomeIcon icon={faCloud} /> : item.weatherConditions))}
                            </div>
                            <div className="row">
                                {item.high}<span>&#176;</span>
                            </div>
                            <div className="row">
                                {item.low}<span>&#176;</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WeeklyForecast;
