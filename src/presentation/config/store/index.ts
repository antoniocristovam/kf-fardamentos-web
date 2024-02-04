import { configureStore } from '@reduxjs/toolkit';

// Slices
import { LayoutSlice } from '../store-template/layouts/reducer';
import { clientsByIdSlice } from './client/clientByIdSlice';
import { clientsListSlice } from './client/clientListSlice';
export const store = configureStore({
  reducer: {
    Layout: LayoutSlice.reducer,
    clients: clientsListSlice.reducer,
    clientsById: clientsByIdSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
