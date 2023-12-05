import { IWeatherData } from './weather';

export type IFavouriteContext = {
  favouriteList: IWeatherData[];
  setFavouriteList: React.Dispatch<React.SetStateAction<IWeatherData[]>>;
  inListItem: (itemToCheck: string) => boolean;
  removeOption: (itemSelected: string) => IWeatherData[];
  handleAdd: (weatherObj: IWeatherData) => void;
  handleRemove: (weatherObj: IWeatherData) => void;
};
