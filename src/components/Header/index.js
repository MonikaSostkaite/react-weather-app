import React from 'react';
import logo from '../../media/weather-forecast-vector.jpg';
import loader from '../../media/loader.gif';

import './index.scss';

const Header = ({ isLoading, weather }) => (
    <section className="header">
        <img className="logo" src={logo} alt="weather-logo" />
        {!isLoading ? (
        <>
            <h1 className="h1-title">
                <span>Weather in</span>
                <p>{weather.location}</p>
            </h1>
            <div>
                <span>{weather.temp}<sup>o</sup>C</span>
            </div>
        </>
        ) : (
            <img className="loader" src={loader} alt="loader" />
        )}
    </section>
);

export default Header;