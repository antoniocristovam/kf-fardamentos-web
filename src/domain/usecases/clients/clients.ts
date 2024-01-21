import { ClientsModel } from 'domain/models';

import { ClientsParams } from './clients-params';

export interface IClients {
  getAllClients: (params: ClientsParams) => Promise<ClientsModel>;
}
