import React from 'react';
import ForecastCard from '../ForecastCard';
import loader from '../../media/loader.gif';

import './index.scss';

const ForecastList = ({ isLoading, weathers }) => (
    <section className="cards-list">
        {!isLoading ? weathers.map(({dt, temp, main, weather, title, icon}) => (
            <ForecastCard
                key={dt}
                temp_max={temp ? temp.max : main.temp_max} 
                temp_min={temp ? temp.min : main.temp_min} 
                dt={dt * 1000} 
                main={weather ? weather[0].main : title} 
                icon={weather ? weather[0].icon : icon} 
            />
        )) : (
            <img className="loader" src={loader} alt="loader" />
        )} 
    </section>
);

export default ForecastList;