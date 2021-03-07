import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import keys from "./apiKeys";
import logo from './media/weather-forecast-vector.jpg';

import './App.scss';

const api = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
};

const AppLayout = () => {
    const [weather, setWeather] = useState({});
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(async position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, [latitude, longitude]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${api.base}onecall?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
        }

        // call the async fetchData function
        if (latitude && longitude) fetchData();
    }, [latitude, longitude]);
    
    return (
        <div id="page">
            <header>
                {!isEmpty(weather) ? (
                    <section>
                        <img src={logo} alt="My logo" />
                        <h1 className="h1-title">
                            <span>Weather in</span>
                            <p>{weather.timezone}</p>
                        </h1>
                        <div>
                            <span>{weather.current.temp}<sup>o</sup>C</span>
                        </div>
                    </section>
                ) : (
                    <div>no weather for that location</div>
                )}
            </header>
            <main>
                
            </main>
            <footer></footer>
        </div>
    );
}

export default AppLayout;
