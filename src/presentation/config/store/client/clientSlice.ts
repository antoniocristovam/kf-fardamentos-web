import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientsModel } from 'domain/models';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ClientsState {
  clients: ClientsModel;
  client: ClientsModel;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadClients extends PayloadAction<ClientsModel> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadClientsList extends PayloadAction<ClientsModel> {}

const initialState: ClientsState = {
  client: null,
  clients: null,
};

export const clientsSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    getClients: (state, action: PayloadClientsList) => {
      state.clients = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearClients: (state, action: PayloadClients) => {
      state.client = null;
    },
  },
});

export const { getClients, clearClients } = clientsSlice.actions;
