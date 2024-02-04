import { ClientsByIdModel, ClientsModel } from 'domain/models';

import { ClientsByIdParams, ClientsParams } from './clients-params';

export interface IClients {
  getAllClients: (params: ClientsParams) => Promise<ClientsModel>;
  getClientsById: (params: ClientsByIdParams) => Promise<ClientsByIdModel>;
}
