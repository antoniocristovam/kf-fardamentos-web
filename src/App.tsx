import React from 'react';
import { ToastContainer } from 'react-toastify'; //import Scss
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-credit-cards/lib/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'cleave.js/dist/addons/cleave-phone.in';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './presentation/config/assets/scss/themes.scss'; // Routes
import { Router } from './main/routing'; // Fake Backend
import fakeBackend from './presentation/app/helpers/AuthType/fakeBackend'; // Activating fake backend

// Activating fake backend
fakeBackend();

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router />
    </React.Fragment>
  );
}

export default App;
