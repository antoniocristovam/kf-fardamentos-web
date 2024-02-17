import { EmployerByIdModel, EmployerModel } from 'domain/models';

import {
  EmployerParams,
  EmployerDeleteParams,
  EmployersByIdParams,
} from './employer-params';

export interface IEmployee {
  // Delete
  deleteEmployee: (params: EmployerDeleteParams) => Promise<void>;

  // GetAll
  getAllEmployee: (params: EmployerParams) => Promise<EmployerModel>;

  // GetById
  getEmployeeById: (params: EmployersByIdParams) => Promise<EmployerByIdModel>;
}
