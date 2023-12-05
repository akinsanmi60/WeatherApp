import axios from 'axios';
import { WeatherDataBase, WeatherType } from 'types/weather';

export const fetchData = async (inputValue: string) => {
  const res = (await axios.get(
    `${import.meta.env.VITE_WEATHER_API_URL}/weather?q=${inputValue}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`,
  )) as { data: WeatherDataBase };

  const response = (await axios.get(
    `${import.meta.env.VITE_WEATHER_API_URL}/onecall?lat=${
      res.data.coord.lat
    }&lon=${res.data.coord.lon}&exclude=minutely,alerts&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`,
  )) as { data: WeatherType };

  const baseWeather = {
    name: res.data.name,
    coord: res.data.coord,
    sys: res.data.sys,
    main: res.data.main,
  };

  return { ...response.data, ...baseWeather };
};
