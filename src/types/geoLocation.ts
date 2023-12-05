import { IWeatherData } from './weather';

export interface GeolocationState {
  locationDetails?: GeolocationPosition | null;
  error?: string;
  searchData?: IWeatherData | null;
}

export type IGeoLocationType = {
  setCurrentLocation: React.Dispatch<React.SetStateAction<GeolocationState>>;
  currentLocation: GeolocationState;
};
