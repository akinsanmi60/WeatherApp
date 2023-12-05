import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GeoLocationProvider from 'context/geoLocationProvider.tsx';
import ModalProvider from 'context/modelProvider.tsx';
import AddFavoriteProvider from 'context/addFavoriteProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeoLocationProvider>
      <ModalProvider>
        <AddFavoriteProvider>
          <App />
        </AddFavoriteProvider>
      </ModalProvider>
    </GeoLocationProvider>
  </React.StrictMode>,
);
