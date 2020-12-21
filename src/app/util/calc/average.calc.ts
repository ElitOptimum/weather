export const getAverageTemp = (weather:Weather)=> Math.round(weather!.data.reduce((total, current) => total + current.temp, 0) / weather!.data.length);
