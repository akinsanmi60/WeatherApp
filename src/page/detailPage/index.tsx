import { iconUrlFromCode } from '@utils/constant';
import { useFavouriteContext } from 'context/addFavoriteProvider';
import { useModalContext } from 'context/modelProvider';
import { IWeatherData } from 'types/weather';
import { IoCloseOutline } from 'react-icons/io5';
import Forcast from 'components/forcast';

function DetailPage({ dataToDisplay }: { dataToDisplay: IWeatherData | null }) {
  const { handleModalClose } = useModalContext();
  const { inListItem, handleAdd, handleRemove } = useFavouriteContext();

  const changeAction = inListItem(dataToDisplay?.name as string)
    ? handleRemove
    : handleAdd;

  return (
    <div className="h-screen">
      <div className="flex justify-between p-[10px] sticky top-0 shadow-sm bg-white">
        <div>
          <h1 className="text-3xl font-[600]">{dataToDisplay?.name}</h1>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => handleModalClose('detailPage')}
        >
          <IoCloseOutline className="text-3xl" />
        </div>
      </div>
      <div className="mt-[10px] flex items-center justify-between p-[10px]">
        <div className="">
          <div className="flex gap-[5px] items-center text-[15px]">
            <p>Long: {dataToDisplay?.coord.lon}</p>
            <p>|</p>
            <p>Lat: {dataToDisplay?.coord.lat}</p>
          </div>
          <h1 className="text-md font-[400] mt-[10px]">
            Time Zone: {dataToDisplay?.timezone}
          </h1>
        </div>
        <div>
          <button
            className="w-full h-[40px] px-[8px] cursor-pointer text-[13px] font-[600] rounded-[12px] bg-slate-200 flex items-center gap-2 justify-center hover:bg-cyan-500"
            onClick={() => changeAction(dataToDisplay as IWeatherData)}
          >
            {inListItem(dataToDisplay?.name as string)
              ? 'Remove from favorites'
              : 'Add to favorites'}
          </button>
        </div>
      </div>
      <div className="mt-[30px]">
        <h1 className="border-y-[1px] border-slate-300 p-2 text-[18px] font-[600] ">
          Current Weather Deatils
        </h1>

        <div className="flex justify-between items-center py-[10px]">
          <div className="flex items-center w-1/2">
            <div>
              <img
                src={iconUrlFromCode(
                  dataToDisplay?.current.weather[0].icon as string,
                )}
                alt=""
                className="w-[100px] h-full text-white"
              />
            </div>
            <div className="-ml-3">
              <p className="text-[35px] font-[600]">{`${dataToDisplay?.current.temp.toFixed()}°C`}</p>
              <p className="text-[13px] font-[600]">{`Wind Speed: ${dataToDisplay?.current.wind_speed.toFixed()} m/s`}</p>
            </div>
          </div>
          <div className="w-1/2 pr-[5px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <p>Humidity</p>
                <p>{dataToDisplay?.current.humidity}%</p>
              </div>
              <div className="flex justify-between">
                <p>Cloud</p>
                <p>{dataToDisplay?.current.clouds}%</p>
              </div>
              <div className="flex justify-between">
                <p>Pressure</p>
                <p>{dataToDisplay?.current.pressure}</p>
              </div>
              <div className="flex justify-between">
                <p>UV</p>
                <p>{dataToDisplay?.current.uvi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Forcast
        dataToDisplay={dataToDisplay}
        title="
          WEATHER FOR THE NEXT 24 HOURS
          "
      />
    </div>
  );
}

export default DetailPage;
