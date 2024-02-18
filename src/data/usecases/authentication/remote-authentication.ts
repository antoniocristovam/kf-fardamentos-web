import { IUserModel } from 'presentation/app/hooks/useAuth';

import {
  UnexpectedError,
  InvalidCredentialsError,
} from '../../../domain/errors';
import {
  type IAuthentication,
  type AuthenticationParams,
} from '../../../domain/usecases';
import { HttpStatusCode } from '../../protocols/http';

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<IUserModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      body: params,
      method: 'post',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
