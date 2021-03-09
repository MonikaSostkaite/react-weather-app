import React, { useEffect, useState } from 'react';
import Header from '../Header';
import ForecastList from '../ForecastList';
import { fetchCurrentWeatherData, fetchSearchWeatherData } from '../../fetch';

import './index.scss';
import Search from '../Search';


const AppLayout = () => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
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
    
    const handleSearchInputChange = e => {

        const inputValue = e.target.value;
        setQuery(inputValue);

        const isInputValueValid = validateInput(inputValue);

        if (isInputValueValid) {
            setError("");
        } else {
            setError('Please enter alphabetic characters');
        }
    }

    const validateInput = (inputValue) => {
        if (inputValue.match("^[a-zA-Z ]*$") != null) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = e => {
        if (query.match("^[a-zA-Z ]*$") != null) {
            setError("");

            fetchSearchWeatherData(query)
                .then((data) => {
                    setQuery("");
                    setWeather(data.current);
                    setWeathers(data.dailyForecast);
                })
                .catch((error) => setWeather({}));

        } else {
            setError('Please enter alphabetic characters');
            setQuery("");
            setWeather({});
        }
    }
    
    return (
        <div id="page">
            <Header weather={weather} />
            <Search
                value={query}
                error={error}
                onSubmit={handleSubmit}
                onChange={handleSearchInputChange}
            />
            <ForecastList weathers={weathers}/>
        </div>
    );
}

export default AppLayout;
