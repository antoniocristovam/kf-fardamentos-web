import { configureStore } from '@reduxjs/toolkit';

// Slices
import { LayoutSlice } from '../store-template/layouts/reducer';
import { clientsByIdSlice } from './client/clientByIdSlice';
import { clientsListSlice } from './client/clientListSlice';
import { employeeByIdSlice } from './employee/employeeByIdSlice';
import { clientsEmployeeSlice } from './employee/employeeListSlice';
export const store = configureStore({
  reducer: {
    Layout: LayoutSlice.reducer,

    //List
    clients: clientsListSlice.reducer,
    employees: clientsEmployeeSlice.reducer,

    //ById
    clientsById: clientsByIdSlice.reducer,
    employeeById: employeeByIdSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
