import keys from './apiKeys';

const API = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
};

export const fetchCurrentWeatherData = async (latitude, longitude) => {
    const data = await fetch(`${API.base}onecall?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API.key}`)
        .then((res) => res.json())
        .then((result) => ({
            current: {
                temp: result.current.temp,
                location: result.timezone,
            },
            dailyForecast: result.daily,                
        }));
    return data;
}

export const fetchSearchWeatherData = async (query) => {
    const data = await fetch(`${API.base}forecast?q=${query}&units=metric&APPID=${API.key}`)
        .then((res) => res.json())
        .then((result) => ({
            current: {
                temp: result.list[0].main.temp,
                location: result.city.name,
            },
            dailyForecast: result.list,                
        }));
    return data;
}