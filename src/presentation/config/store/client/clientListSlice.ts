import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientsModel } from 'domain/models';

interface IClientsState {
  clients: ClientsModel;
  client: ClientsModel;
}

interface IPayloadClientsList extends PayloadAction<ClientsModel> {}

const initialState: IClientsState = {
  client: null,
  clients: null,
};

export const clientsListSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    getClients: (state, action: IPayloadClientsList) => {
      state.clients = action.payload;
    },
    clearClients: (state) => {
      state.client = null;
    },
  },
});

export const { getClients, clearClients } = clientsListSlice.actions;
