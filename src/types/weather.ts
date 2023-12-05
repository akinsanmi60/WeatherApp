export type WeatherType = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    speed: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
    ];
  };
  minutely: [
    {
      dt: string;
      precipitation: number;
    },
  ];
  hourly: [
    {
      dt: number;
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      dew_point: number;
      uvi: number;
      clouds: number;
      visibility: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      pop: string;
    },
  ];
  daily: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      moonrise: number;
      moonset: number;
      moon_phase: number;
      summary: string;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      pressure: number;
      humidity: number;
      dew_point: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      clouds: number;
      pop: number;
      rain: number;
      uvi: number;
    },
  ];
  alerts: [
    {
      sender_name: string;
      event: string;
      start: number;
      end: number;
      description: string;
      tags: [];
    },
  ];
};

export type WeatherDataBase = {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  sys: {
    country: string;
  };
  main: {
    temp_min: number;
    temp_max: number;
  };
};

export type IWeatherData = WeatherDataBase & WeatherType;