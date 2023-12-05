import React, { createContext, useContext, useMemo, useState } from 'react';
import { IFav, IFavouriteContext } from 'types/favourite';
import { IWeatherData } from 'types/weather';

export const FavouriteContext = createContext({} as IFavouriteContext);

export default function AddFavoriteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dataInLocal = localStorage.getItem('favoriteWeather');
  const data = JSON.parse(dataInLocal!) as IWeatherData[];

  const initialFavouriteList: IWeatherData[] = Array.isArray(data) ? data : [];

  const [favouriteList, setFavouriteList] =
    useState<IWeatherData[]>(initialFavouriteList);
  const [fav, setFav] = useState<IFav>({
    text: '',
    data: null,
  });

  const inListItem = (itemToCheck: string) => {
    return favouriteList?.some(obj => obj?.name === itemToCheck);
  };
  const removeOption = (itemSelected: string) => {
    return favouriteList?.filter(item => item?.name !== itemSelected);
  };

  const handleAdd = (weatherObj: IWeatherData) => {
    if (favouriteList?.length === 10)
      return alert('You can not add more than 10 items');
    if (!inListItem(weatherObj.name)) {
      const newArray = [...(favouriteList as IWeatherData[]), weatherObj];
      setFavouriteList(newArray);
      localStorage.setItem('favoriteWeather', JSON.stringify(newArray));
      return;
    } else {
      return alert('Item already in list');
    }
  };

  const handleRemove = (weatherObj: IWeatherData) => {
    const newArray = removeOption(weatherObj.name);
    setFavouriteList(newArray);
    localStorage.setItem('favoriteWeather', JSON.stringify(newArray));
  };

  const memoizedValue = useMemo(
    () => ({
      inListItem,
      removeOption,
      handleAdd,
      handleRemove,
      setFav,
      fav,
    }),
    [inListItem, removeOption, handleAdd, handleRemove],
  );

  return (
    <FavouriteContext.Provider
      value={{ favouriteList, setFavouriteList, ...memoizedValue }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export const useFavouriteContext = () => useContext(FavouriteContext);
