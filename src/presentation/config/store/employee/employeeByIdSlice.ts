import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeByIdModel } from 'domain/models';

interface IEmployeeByIdState {
  employeesById: EmployeeByIdModel;
  employeeById: EmployeeByIdModel;
}

interface IPayloadGetEmployeeById extends PayloadAction<EmployeeByIdModel> {}

const initialState: IEmployeeByIdState = {
  employeeById: null,
  employeesById: null,
};

export const employeeByIdSlice = createSlice({
  name: 'employeeById',
  initialState,
  reducers: {
    getEmployeeById: (state, action: IPayloadGetEmployeeById) => {
      state.employeesById = action.payload;
    },
    clearEmployeeById: (state) => {
      state.employeeById = null;
    },
  },
});

export const { getEmployeeById, clearEmployeeById } = employeeByIdSlice.actions;
