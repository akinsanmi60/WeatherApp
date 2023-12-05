import { iconUrlFromCode } from '@utils/constant';
import { useFavouriteContext } from 'context/addFavoriteProvider';
import { useModalContext } from 'context/modelProvider';
import { IWeatherData } from 'types/weather';
import { IoCloseOutline } from 'react-icons/io5';
import Forcast from 'components/forcast';
import CustomTextarea from 'components/addNote';
import CustomButton from '@shared/button';

function DetailPage({ dataToDisplay }: { dataToDisplay: IWeatherData | null }) {
  const { handleModalClose } = useModalContext();
  const { inListItem, handleAdd, handleRemove, fav, setFav } =
    useFavouriteContext();

  const changeAction = inListItem(dataToDisplay?.name as string)
    ? handleRemove
    : handleAdd;

  const title = inListItem(dataToDisplay?.name as string)
    ? 'Remove from favorites'
    : 'Add to favorites';

  const switchedData = fav.text === 'Details' ? fav.data : dataToDisplay;

  return (
    <div className="h-screen">
      <div className="flex justify-between p-[10px] sticky top-0 shadow-sm bg-white">
        <div>
          <h1 className="text-3xl font-[600]">{switchedData?.name}</h1>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setFav({
              text: '',
              data: null,
            });
            handleModalClose('detailPage');
          }}
        >
          <IoCloseOutline className="text-3xl" />
        </div>
      </div>
      <div className="mt-[10px] flex items-center justify-between p-[10px]">
        <div className="">
          <div className="flex gap-[5px] items-center text-[15px]">
            <p>Long: {switchedData?.coord.lon}</p>
            <p>|</p>
            <p>Lat: {switchedData?.coord.lat}</p>
          </div>
          <h1 className="text-md font-[400] mt-[10px]">
            Time Zone: {switchedData?.timezone}
          </h1>
        </div>
        <div>
          <CustomButton
            title={title}
            handleClick={() => changeAction(switchedData as IWeatherData)}
          />
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
                  switchedData?.current.weather[0].icon as string,
                )}
                alt=""
                className="w-[100px] h-full text-white"
              />
            </div>
            <div className="-ml-3">
              <p className="text-[35px] font-[600]">{`${switchedData?.current.temp.toFixed()}°C`}</p>
              <p className="text-[13px] font-[600]">{`Wind Speed: ${switchedData?.current.wind_speed.toFixed()} m/s`}</p>
            </div>
          </div>
          <div className="w-1/2 pr-[5px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <p>Humidity</p>
                <p>{switchedData?.current.humidity}%</p>
              </div>
              <div className="flex justify-between">
                <p>Cloud</p>
                <p>{switchedData?.current.clouds}%</p>
              </div>
              <div className="flex justify-between">
                <p>Pressure</p>
                <p>{switchedData?.current.pressure}</p>
              </div>
              <div className="flex justify-between">
                <p>UV</p>
                <p>{switchedData?.current.uvi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Forcast
        dataToDisplay={switchedData as IWeatherData}
        title="
          WEATHER FOR THE NEXT 24 HOURS
          "
      />

      <CustomTextarea name={switchedData?.name as string} />
    </div>
  );
}

export default DetailPage;
