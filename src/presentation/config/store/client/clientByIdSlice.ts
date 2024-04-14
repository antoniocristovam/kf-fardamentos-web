import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientsByIdModel } from 'domain/models';

interface IClientsByIdState {
  clientsById: ClientsByIdModel;
  clientById: ClientsByIdModel;
}

interface IPayloadGetClientsById extends PayloadAction<ClientsByIdModel> {}

const initialState: IClientsByIdState = {
  clientById: null,
  clientsById: null,
};

export const clientsByIdSlice = createSlice({
  name: 'clientById',
  initialState,
  reducers: {
    getClientsById: (state, action: IPayloadGetClientsById) => {
      state.clientsById = action.payload;
    },
    clearClientsById: (state) => {
      state.clientById = null;
    },
  },
});

export const { getClientsById, clearClientsById } = clientsByIdSlice.actions;
