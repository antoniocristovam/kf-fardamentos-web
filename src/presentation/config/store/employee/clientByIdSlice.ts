import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeByIdModel } from 'domain/models';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ClientsByIdState {
  clientsById: EmployeeByIdModel;
  clientById: EmployeeByIdModel;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadClientsById extends PayloadAction<EmployeeByIdModel> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadGetClientsById extends PayloadAction<EmployeeByIdModel> {}

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
