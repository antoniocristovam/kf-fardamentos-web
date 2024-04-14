import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthProvider } from './presentation/app/hooks/useAuth';
import { LoadingProvider } from './presentation/app/hooks/useLoading';
import { rootReducer } from './presentation/config/store-template';
import reportWebVitals from './reportWebVitals';

const store = configureStore({ reducer: rootReducer, devTools: true });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AuthProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  </Provider>,
);
reportWebVitals();
