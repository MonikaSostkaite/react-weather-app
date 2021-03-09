import React from 'react';
import { isEmpty } from 'lodash';
import logo from '../../media/weather-forecast-vector.jpg';

import './index.scss';

const Header = ({ weather }) => (
    <header>
        {!isEmpty(weather) ? (
            <section>
                <img src={logo} alt="weather-logo" />
                <h1 className="h1-title">
                    <span>Weather in</span>
                    <p>{weather.location}</p>
                </h1>
                <div>
                    <span>{weather.temp}<sup>o</sup>C</span>
                </div>
            </section>
        ) : (
        <div>no weather for that location</div>
        )}
    </header>
);

export default Header;