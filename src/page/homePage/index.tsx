import { useEffect, useState } from 'react';
import bright from '@assets/png/bright.jpg';
import Header from '@shared/header';
import { IWeatherData } from 'types/weather';
import WeatherDetailComponent from 'components/weatherDetail';
import { useModalContext } from 'context/modelProvider';
import ModalBoxLayout from '@shared/ModalBoxLayout';
import DetailPage from 'page/detailPage';
import { fetchData } from '@utils/api';
import { useGetLocationContext } from 'context/geoLocationProvider';
import FavouriteListPage from 'page/favouritePage';

function HomePage() {
  const { currentLocation } = useGetLocationContext();
  const { modalState } = useModalContext();

  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData('lagos');
      setWeatherData(response);
    };
    getData();
  }, []);

  const dataToDisplay =
    currentLocation?.searchData === undefined ||
    currentLocation?.searchData === null
      ? weatherData
      : currentLocation?.searchData;

  const imgs = bright;

  return (
    <div
      style={{
        backgroundImage: `url(${imgs})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="pt-[90px]">
        {dataToDisplay && (
          <WeatherDetailComponent dataToDisplay={dataToDisplay} />
        )}
      </div>

      {modalState?.modalType === 'detailPage' && (
        <ModalBoxLayout openModalBox={modalState.openModal}>
          <DetailPage dataToDisplay={dataToDisplay} />
        </ModalBoxLayout>
      )}
      {modalState?.modalType === 'favouriteList' && (
        <ModalBoxLayout openModalBox={modalState.openModal}>
          <FavouriteListPage />
        </ModalBoxLayout>
      )}
    </div>
  );
}

export default HomePage;
