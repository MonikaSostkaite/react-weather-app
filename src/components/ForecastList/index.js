import React from 'react';
import ForecastCard from '../ForecastCard';

import './index.scss';

const ForecastList = ({ weathers }) => (
    <section className="cards-list">
        {weathers.map(({dt, temp, weather}) => (
            <ForecastCard
                key={dt}
                temp_max={temp.max} 
                temp_min={temp.min} 
                dt={dt * 1000} 
                main={weather[0].main} 
                icon={weather[0].icon} 
            />
        ))} 
    </section>
);

export default ForecastList;