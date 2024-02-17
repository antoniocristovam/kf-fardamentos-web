import { RemoteEmployee } from '../../../../data/usecases/employee/remote-employee';
import { IEmployee } from '../../../../domain/usecases';
import { makeApiUrlEmployee } from '../../http/api-url-factory';
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory';

export const makeRemoteEmployee = (): IEmployee => {
  return new RemoteEmployee(makeApiUrlEmployee(), makeAxiosHttpClient());
};
