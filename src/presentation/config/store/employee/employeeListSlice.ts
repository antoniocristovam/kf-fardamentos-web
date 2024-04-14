import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeModel } from 'domain/models';

interface IEmployeeState {
  employees: EmployeeModel;
  employee: EmployeeModel;
}

interface IPayloadEmployeeList extends PayloadAction<EmployeeModel> {}

const initialState: IEmployeeState = {
  employee: null,
  employees: null,
};

export const clientsEmployeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getEmployee: (state, action: IPayloadEmployeeList) => {
      state.employees = action.payload;
    },
    clearEmployee: (state) => {
      state.employee = null;
    },
  },
});

export const { getEmployee, clearEmployee } = clientsEmployeeSlice.actions;
