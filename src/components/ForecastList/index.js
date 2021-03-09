import React from 'react';
import ForecastCard from '../ForecastCard';

import './index.scss';

const ForecastList = ({ weathers }) => (
    <section className="cards-list">
        {weathers.map(({dt, temp, main, weather}) => (
            <ForecastCard
                key={dt}
                temp_max={temp ? temp.max : main.temp_max} 
                temp_min={temp ? temp.min : main.temp_min} 
                dt={dt * 1000} 
                main={weather[0].main} 
                icon={weather[0].icon} 
            />
        ))} 
    </section>
);

export default ForecastList;