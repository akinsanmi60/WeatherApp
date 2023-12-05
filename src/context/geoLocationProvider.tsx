import React, { createContext, useContext, useState } from 'react';
import { GeolocationState, IGeoLocationType } from 'types/geoLocation';

export const LocationContext = createContext({} as IGeoLocationType);
function GeoLocationProvider({ children }: { children: React.ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<GeolocationState>({
    locationDetails: null,
    error: '',
    searchData: null,
  });

  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export default GeoLocationProvider;

export const useGetLocationContext = () => useContext(LocationContext);
