import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorBoundary from './hooks/errorBoundary';
import { Suspense, useEffect } from 'react';
import HomePage from './page/homePage';
import LayoutWrapper from './shared/weblayout';
import { useGetLocationContext } from 'context/geoLocationProvider';

function App() {
  const { setCurrentLocation } = useGetLocationContext();

  useEffect(() => {
    const handleLocationSuccess = (position: GeolocationPosition) => {
      setCurrentLocation({ locationDetails: position });
    };

    const handleLocationError = (error: GeolocationPositionError) => {
      let errorMessage = 'An error occurred while retrieving your location.';
      if (error.code === 1) {
        errorMessage = 'Permission denied. Please enable location services.';
      } else if (error.code === 2) {
        errorMessage = 'Position unavailable. Please try again later.';
      } else if (error.code === 3) {
        errorMessage = 'Timeout occurred while retrieving your location.';
      }
      setCurrentLocation({ error: errorMessage });
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError,
      );
    };

    const checkGeolocationPermission = () => {
      navigator.permissions.query({ name: 'geolocation' }).then(result => {
        if (result.state === 'granted') {
          getLocation();
        } else if (result.state === 'prompt') {
          getLocation();
        } else if (result.state === 'denied') {
          // Handle denied permission
        }
      });
    };

    if (navigator.geolocation) {
      checkGeolocationPermission();
    }
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
      </>,
    ),
  );
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading</p>}>
        <LayoutWrapper>
          <RouterProvider router={router} />
        </LayoutWrapper>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
