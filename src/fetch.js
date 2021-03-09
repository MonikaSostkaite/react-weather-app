import keys from './apiKeys';

const API = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
};

export const fetchCurrentWeatherData = async (latitude, longitude) => {
    const data = await fetch(`${API.base}onecall?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API.key}`)
        .then((res) => res.json())
        .then((result) => console.log('result', result) || ({
            current: {
                temp: result.current.temp,
                location: result.timezone,
            },
            dailyForecast: result.daily,                
        }));
    return data;
}