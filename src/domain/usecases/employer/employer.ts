import { ClientsByIdModel, ClientsModel } from 'domain/models';

import {
  EmployerDeleteParams,
  EmployerParams,
  EmployersByIdParams,
} from './employer-params';

export interface IClients {
  // Delete
  deleteClients: (params: EmployerDeleteParams) => Promise<void>;

  // GetAll
  getAllClients: (params: EmployerParams) => Promise<ClientsModel>;

  // GetById
  getClientsById: (params: EmployersByIdParams) => Promise<ClientsByIdModel>;
}
