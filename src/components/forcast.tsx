import { iconUrlFromCode } from '@utils/constant';
import { IWeatherData } from 'types/weather';

function Forcast({
  dataToDisplay,
  title,
}: {
  dataToDisplay: IWeatherData | null;
  title: string;
}) {
  return (
    <div>
      {' '}
      <div className=" bg-slate-200 px-[10px] pt-[20px] h-[500px] mt-[20px] ">
        <h1 className="text-[18px] font-[600] -mb-[20px]">{title} </h1>
        <div className="flex justify-between gap-x-[30px] h-[100%]  overflow-x-auto -mt-4  bg-slate-200">
          {dataToDisplay?.hourly.slice(0, 24).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center "
            >
              <p className="font-light text-[16px]">{item.weather[0].main}</p>
              <img
                src={iconUrlFromCode(item.weather[0].icon)}
                className="w-[80px] my-1"
                alt=""
              />
              <p className="font-medium text-[20px]">{`${item?.temp?.toFixed()}°C`}</p>

              <div className="flex flex-col gap-2 mt-[16px] border-b-[1px] pb-[10px] border-slate-300">
                <p className="text-center">{item.clouds}%</p>
                <p className="text-center text-sm">cloudiness</p>
              </div>
              <div className="flex flex-col gap-2 mt-[16px] border-b-[1px] pb-[10px] border-slate-300">
                <p className="text-center">{item.humidity}%</p>
                <p className="text-center text-sm">Humidity</p>
              </div>
              <div className="flex flex-col gap-2 mt-[16px] border-b-[1px] leading-5 pb-[10px] border-slate-300">
                <p className="text-center">{item.wind_speed.toFixed()} m/s</p>
                <p className="text-center text-sm">Wind Speed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forcast;
