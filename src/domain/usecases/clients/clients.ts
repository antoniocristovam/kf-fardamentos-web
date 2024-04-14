import {
  ClientsModel,
  ClientsByIdModel,
  ClientsCreateResponse,
} from 'domain/models';

import {
  ClientsParams,
  ClientsByIdParams,
  ClientsDeleteParams,
  ClientsCreateParams,
} from './clients-params';

export interface IClients {
  // Delete
  deleteClients: (params: ClientsDeleteParams) => Promise<void>;

  // GetAll
  getAllClients: (params: ClientsParams) => Promise<ClientsModel>;

  // GetById
  getClientsById: (params: ClientsByIdParams) => Promise<ClientsByIdModel>;

  // Create
  createClients: (
    params: ClientsCreateParams,
  ) => Promise<ClientsCreateResponse>;
}
