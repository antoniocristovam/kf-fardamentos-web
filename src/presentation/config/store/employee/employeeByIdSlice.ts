import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeByIdModel } from 'domain/models';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface EmployeeByIdState {
  employeesById: EmployeeByIdModel;
  employeeById: EmployeeByIdModel;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadEmployeeById extends PayloadAction<EmployeeByIdModel> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface PayloadGetEmployeeById extends PayloadAction<EmployeeByIdModel> {}

const initialState: EmployeeByIdState = {
  employeeById: null,
  employeesById: null,
};

export const employeeByIdSlice = createSlice({
  name: 'employeeById',
  initialState,
  reducers: {
    getEmployeeById: (state, action: PayloadGetEmployeeById) => {
      state.employeesById = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearEmployeeById: (state, action: PayloadEmployeeById) => {
      state.employeeById = null;
    },
  },
});

export const { getEmployeeById, clearEmployeeById } = employeeByIdSlice.actions;
