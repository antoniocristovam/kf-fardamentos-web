import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeModel } from 'domain/models';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface EmployeeState {
  employees: EmployeeModel;
  employee: EmployeeModel;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadEmployee extends PayloadAction<EmployeeModel> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadEmployeeList extends PayloadAction<EmployeeModel> {}

const initialState: EmployeeState = {
  employee: null,
  employees: null,
};

export const clientsEmployeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getEmployee: (state, action: PayloadEmployeeList) => {
      state.employees = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearEmployee: (state, action: PayloadEmployee) => {
      state.employee = null;
    },
  },
});

export const { getEmployee, clearEmployee } = clientsEmployeeSlice.actions;
