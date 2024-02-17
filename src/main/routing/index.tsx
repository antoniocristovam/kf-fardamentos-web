// React
import NonAuthLayout from 'presentation/config/layouts/NonAuthLayout';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import VerticalLayout from '../../presentation/config/layouts/index';
// eslint-disable-next-line import-helpers/order-imports

// Routes
import { PrivateRoutes, privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';

export const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
            />
          ))}
        </Route>

        <Route>
          {privateRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <PrivateRoutes>
                  <VerticalLayout>{route.component}</VerticalLayout>
                </PrivateRoutes>
              }
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};
