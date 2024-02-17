import { EmployerByIdModel, EmployerModel } from 'domain/models';

import {
  EmployeeParams,
  EmployeeDeleteParams,
  EmployeeByIdParams,
} from './employer-params';

export interface IEmployee {
  // Delete
  deleteEmployee: (params: EmployeeDeleteParams) => Promise<void>;

  // GetAll
  getAllEmployee: (params: EmployeeParams) => Promise<EmployerModel>;

  // GetById
  getEmployeeById: (params: EmployeeByIdParams) => Promise<EmployerByIdModel>;
}
