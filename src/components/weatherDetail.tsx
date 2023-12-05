import {  iconUrlFromCode } from '@utils/constant';
import { IWeatherData } from 'types/weather';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa6';
import { IoWaterOutline } from 'react-icons/io5';

function WeatherDetailComponent({
  dataToDisplay,
}: {
  dataToDisplay: IWeatherData | null;
}) {
  
  return (
    <div className=" text-white max-content">
      <div className="container">
        <div className="flex justify-center">
          <div className="flex justify-between items-center mb-[10px]">
            <div>
              <img
                src={iconUrlFromCode(
                  dataToDisplay?.current.weather[0].icon as string,
                )}
                alt=""
                className="w-[100px] h-full text-white"
              />
            </div>
            <div>
              <p className="text-[70px] font-[600] text-center">{`${dataToDisplay?.current.temp.toFixed()}°C`}</p>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-center font-[600] text-[38px] my-5 text-white tracking-normal">
            {' '}
            {dataToDisplay?.name}, {dataToDisplay?.sys.country}
          </h1>
          <h1 className="text-center font-[600] text-[18px] text-white">
            {dataToDisplay?.current.weather[0].description}
          </h1>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-[18px] py-5">
          <GiSunrise />
          <p className="font-light ">
            Rise:{' '}
            <span className="font-[600]  ml-1">
              {/* {formatToLocalTime(sunrise, timezone, 'hh:mm a')} */}
            </span>
          </p>
          <p className="font-light">|</p>

          <GiSunset />
          <p className="font-light">
            Set:{' '}
            <span className="font-medium ml-1">
              {/* {formatToLocalTime(sunset, timezone, 'hh:mm a')} */}
            </span>
          </p>
          <p className="font-light">|</p>

          <FaArrowUp />
          <p className="font-light">
            High:{' '}
            <span className="font-medium ml-1">{`${dataToDisplay?.main.temp_max.toFixed()}°`}</span>
          </p>
          <p className="font-light">|</p>

          <FaArrowDown />
          <p className="font-light">
            Low:{' '}
            <span className="font-medium ml-1">{`${dataToDisplay?.main.temp_min.toFixed()}°`}</span>
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center space-y-2 ">
            <div className="flex font-light text-sm items-center justify-center">
              <FaWind className="mr-1 text-[18px]" />
              Wind:
              <span className="font-medium ml-1">{`${dataToDisplay?.current.wind_speed.toFixed()} m/s`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <IoWaterOutline className="mr-1 text-[18px]" />
              Humidity:
              <span className="font-medium ml-1">{`${dataToDisplay?.current.humidity.toFixed()}%`}</span>
            </div>

            <div className="flex font-light text-sm items-center justify-center">
              <FaWind className="mr-1 text-[18px]" />
              Pressure:
              <span className="font-medium ml-1">
                {dataToDisplay?.current.pressure as number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetailComponent;
