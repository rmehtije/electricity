import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import { BrowserRouter } from 'react-router-dom';

// React i ReactDOM eto dva npm paketa kotorye i formirujut sam react.
// ReactDOM s pomoshju webpack pererabotyvajet vse nashi komponenty napisany v React i otprovljajet eto vsjo v div.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render eto zapusk komponentov i perevod ih s nodeJs v html i vanilla JS
// Render byvajet 2 tipov: 
// 1. Mount (pervaja otrisovka/render, popodanije komponenta v DOM)
// 2. Render (vse posledushie otrisovki)
// Takzhe i jest' unmount - 4to zna4it komponent propal iz DOM i render pri etom ne proishodit.


// Dlja raboty redux v reacte nuzhen dopolnitel'nyj module react-redux.
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
