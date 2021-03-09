import React from 'react';

import './index.scss';

const ForecastCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);

    return (
        <div className="card-item">
            <img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
            <div>
                <div>{main}</div>
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                {/* minimum temperature */}
                <p>Min: {temp_min}</p>
                {/* maximum temperature */}
                <p>Max: {temp_max}</p>
            </div>
        </div>
    );
};

export default ForecastCard;