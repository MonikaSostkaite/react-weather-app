import { last, isEmpty } from 'lodash';

const isSameDay = (timestamp1, timestamp2) => {
    const d1 = new Date(timestamp1 * 1000);
    const d2 = new Date(timestamp2 * 1000);

    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

const mostFrequentItem = (array) => {
    var sortedArray = array.sort();
    var start = array[0], item;
    for(var i = 0 ;  i < sortedArray.length; i++){
      if(start === sortedArray[i] || sortedArray[i] === sortedArray[i+1]){
         item = sortedArray[i]
      }
    }
    return item;  
}

export const agregatedWeatherForecastList = (weathers) => {
    let result = weathers.reduce((list, item) => {
        const { dt, main, weather } = item;
        if (isEmpty(list)) {
            return [
                {
                    dt,
                    temp: {min: main.temp_min, max: main.temp_max},
                    title: [weather[0].main],
                    icon: [weather[0].icon],
                }
            ];
        }

        if (isSameDay(dt, last(list).dt)) {
            const lastItem = list.pop();
            return [
                ...list,
                {
                    dt,
                    temp: {
                        min: Math.min(lastItem.temp.min, main.temp_min),
                        max: Math.max(lastItem.temp.max, main.temp_max),
                    },
                    title: [...lastItem.title, weather[0].main],
                    icon: [...lastItem.icon, weather[0].icon],
                }
            ];
        } else {
            const lastItem = list.pop();
            return [
                ...list,
                {
                    dt: lastItem.dt,
                    temp: {min: lastItem.temp.min, max: lastItem.temp.max},
                    title: mostFrequentItem(lastItem.title),
                    icon: mostFrequentItem(lastItem.icon),
                },
                {
                    dt,
                    temp: {min: main.temp_min, max: main.temp_max},
                    title: [weather[0].main],
                    icon: [weather[0].icon],
                },
            ];
        }
    }, []);
    const lastResultItem = result.pop();
    return [
        ...result,
        {
            dt: lastResultItem.dt,
            temp: {min: lastResultItem.temp.min, max: lastResultItem.temp.max},
            title: mostFrequentItem(lastResultItem.title),
            icon: mostFrequentItem(lastResultItem.icon),
        },
    ];
};