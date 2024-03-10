import {
  ClientsModel,
  ClientsByIdModel,
  ClientsCreateResponse,
} from 'domain/models';
import {
  ClientsParams,
  ClientsByIdParams,
  ClientsCreateParams,
  ClientsDeleteParams,
} from 'domain/usecases/clients/clients-params';

import {
  InvalidCredentialsError,
  UnexpectedError,
} from '../../../domain/errors';
import { IClients } from '../../../domain/usecases';
import { HttpStatusCode, HttpClient } from '../../protocols/http';

export class RemoteClients implements IClients {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
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

  async createClients(
    params: ClientsCreateParams,
  ): Promise<ClientsCreateResponse> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: params.valueToSubmit,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.forbidden:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }

  async deleteClients(params: ClientsDeleteParams): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${params?.userToken}`,
      },
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
