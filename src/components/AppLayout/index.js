import React, { useEffect, useState } from 'react';
import Header from '../Header';
import ForecastList from '../ForecastList';
import { fetchCurrentWeatherData } from '../../fetch';

import './index.scss';


const AppLayout = () => {
    const [weather, setWeather] = useState({});
    const [weathers, setWeathers] = useState([]);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });

        if (latitude && longitude) {
            fetchCurrentWeatherData(latitude, longitude)
                .then((data) => {
                    setWeather(data.current);
                    setWeathers(data.dailyForecast);
                })
                .catch((error) => setWeather({}));
        }
    }, [latitude, longitude]);
    
    return (
        <div id="page">
            <Header weather={weather} />
            <ForecastList weathers={weathers}/>
        </div>
    );
}

export default AppLayout;
