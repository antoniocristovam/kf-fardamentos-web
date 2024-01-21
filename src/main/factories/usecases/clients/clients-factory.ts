import { RemoteClients } from '../../../../data/usecases/clients/remote-clients';
import { IClients } from '../../../../domain/usecases';
import { makeApiUrlClients } from '../../http/api-url-factory';
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory';

export const makeRemoteClients = (): IClients => {
  return new RemoteClients(makeApiUrlClients(), makeAxiosHttpClient());
};
