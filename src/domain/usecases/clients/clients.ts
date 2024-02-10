import { ClientsByIdModel, ClientsModel } from 'domain/models';

import {
  ClientsParams,
  ClientsByIdParams,
  ClientsDeleteParams,
} from './clients-params';

export interface IClients {
  // Delete
  deleteClients: (params: ClientsDeleteParams) => Promise<void>;

  // GetAll
  getAllClients: (params: ClientsParams) => Promise<ClientsModel>;

  // GetById
  getClientsById: (params: ClientsByIdParams) => Promise<ClientsByIdModel>;
}
