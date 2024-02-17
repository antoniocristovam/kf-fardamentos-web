import { EmployeeByIdModel, EmployeeModel } from 'domain/models';

import {
  EmployeeParams,
  EmployeeDeleteParams,
  EmployeeByIdParams,
} from './employee-params';

export interface IEmployee {
  // Delete
  deleteEmployee: (params: EmployeeDeleteParams) => Promise<void>;

  // GetAll
  getAllEmployee: (params: EmployeeParams) => Promise<EmployeeModel>;

  // GetById
  getEmployeeById: (params: EmployeeByIdParams) => Promise<EmployeeByIdModel>;
}
