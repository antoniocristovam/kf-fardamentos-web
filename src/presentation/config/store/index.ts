import { configureStore } from '@reduxjs/toolkit';

import { LayoutSlice } from '../store-template/layouts/reducer';
import { clientsByIdSlice } from './client/clientByIdSlice';
import { clientsListSlice } from './client/clientListSlice';
import { employeeByIdSlice } from './employee/employeeByIdSlice';
import { clientsEmployeeSlice } from './employee/employeeListSlice';

export const store = configureStore({
  reducer: {
    Layout: LayoutSlice.reducer,

    //Clients
    clients: clientsListSlice.reducer,
    clientsById: clientsByIdSlice.reducer,

    //Employees
    employees: clientsEmployeeSlice.reducer,
    employeeById: employeeByIdSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
