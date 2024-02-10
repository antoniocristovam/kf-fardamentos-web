import { ClientsByIdModel, ClientsModel } from 'domain/models';
import {
  ClientsByIdParams,
  ClientsDeleteParams,
  ClientsParams,
} from 'domain/usecases/clients/clients-params';

import {
  InvalidCredentialsError,
  UnexpectedError,
} from '../../../domain/errors';
import { IClients } from '../../../domain/usecases';
import { HttpStatusCode } from '../../protocols/http';

export class RemoteClients implements IClients {
  constructor(
    private readonly url: string,
    private readonly httpClient,
  ) {}

  async getAllClients(params: ClientsParams): Promise<ClientsModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url + `?page=${params.page}&size=${params.size}`,
      headers: {
        Authorization: `Bearer ${params?.userToken}`,
      },
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.notModified:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }

  async getClientsById(params: ClientsByIdParams): Promise<ClientsByIdModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url + `/${params.id}`,
      headers: {
        Authorization: `Bearer ${params?.userToken}`,
      },
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.notModified:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }

  async deleteClients(params: ClientsDeleteParams): Promise<void> {
    console.log('oi', params);

    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'delete',
      // headers: {
      //   Authorization: `Bearer ${params?.userToken}`,
      // },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return;
      case HttpStatusCode.forbidden:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
