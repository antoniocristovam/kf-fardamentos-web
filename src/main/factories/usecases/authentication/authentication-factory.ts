import { RemoteAuthentication } from '../../../../data/usecases/authentication/remote-authentication';
import { type IAuthentication } from '../../../../domain/usecases';
import { makeApiUrlAuthentication } from '../../http/api-url-factory';
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory';

export const makeRemoteAuthentication = (): IAuthentication => {
  return new RemoteAuthentication(
    makeApiUrlAuthentication(),
    makeAxiosHttpClient(),
  );
};
