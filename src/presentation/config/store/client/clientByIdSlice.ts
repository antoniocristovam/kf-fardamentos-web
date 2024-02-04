import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientsByIdModel } from 'domain/models';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ClientsByIdState {
  clientsById: ClientsByIdModel;
  clientById: ClientsByIdModel;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadClientsById extends PayloadAction<ClientsByIdModel> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadGetClientsById extends PayloadAction<ClientsByIdModel> {}

const initialState: ClientsByIdState = {
  clientById: null,
  clientsById: null,
};

export const clientsByIdSlice = createSlice({
  name: 'clientById',
  initialState,
  reducers: {
    getClientsById: (state, action: PayloadGetClientsById) => {
      state.clientsById = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearClientsById: (state, action: PayloadClientsById) => {
      state.clientById = null;
    },
  },
});

export const { getClientsById, clearClientsById } = clientsByIdSlice.actions;
