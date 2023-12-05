import { iconUrlFromCode } from '@utils/constant';
import { useFavouriteContext } from 'context/addFavoriteProvider';
import { useModalContext } from 'context/modelProvider';
import { IoCloseCircleSharp, IoCloseOutline } from 'react-icons/io5';

function FavouriteListPage() {
  const { handleModalClose } = useModalContext();
  const { handleRemove, favouriteList } = useFavouriteContext();

  return (
    <div>
      <div className="flex justify-between p-[10px] sticky top-0 shadow-sm bg-white">
        <div>
          <h1 className="text-3xl font-[600]">Favourite List</h1>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => handleModalClose('favouriteList')}
        >
          <IoCloseOutline className="text-3xl" />
        </div>
      </div>

      <div className="mt-[10px] flex items-center justify-center flex-col gap-y-[12px] p-[15px]">
        {favouriteList.map(item => {
          return (
            <div
              key={item.name}
              className="cursor-pointer shadow-md flex justify-around items-center w-full"
            >
              <div className="flex items-center">
                <div>
                  <img
                    src={iconUrlFromCode(
                      item?.current.weather[0].icon as string,
                    )}
                    alt=""
                    className="w-[100px] h-full text-white"
                  />
                </div>
                <div className="-ml-3">
                  <p className="text-[35px] font-[600]">{`${item?.current.temp.toFixed()}°C`}</p>
                  <p className="text-[13px] font-[600]">{`Wind Speed: ${item?.current.wind_speed.toFixed()}m/s`}</p>
                </div>
              </div>
              <div>
                <h1 className="text-[20px] font-[600]">{item?.name}</h1>
                <h1 className="text-md font-[400] mt-[10px] text-[13px]">
                  Time Zone: {item?.timezone}
                </h1>
                <div className="flex gap-[5px] items-center text-[13px] mt-2">
                  <p>Long: {item?.coord.lon}</p>
                  <p>|</p>
                  <p>Lat: {item?.coord.lat}</p>
                </div>
              </div>
              <div className="cursor-pointer">
                <IoCloseCircleSharp
                  className="text-2xl hover:text-red-500"
                  onClick={() => handleRemove(item)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavouriteListPage;
