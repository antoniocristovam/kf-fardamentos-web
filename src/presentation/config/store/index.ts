import { configureStore } from '@reduxjs/toolkit';

// Slices
import { LayoutSlice } from '../store-template/layouts/reducer';
import { clientsSlice } from './client/clientSlice';
export const store = configureStore({
  reducer: {
    Layout: LayoutSlice.reducer,
    clients: clientsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
