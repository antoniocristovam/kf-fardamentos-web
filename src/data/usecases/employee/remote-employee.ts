import { EmployerByIdModel, EmployerModel } from 'domain/models';
import { IEmployee } from 'domain/usecases/employer/employer';
import {
  EmployeeParams,
  EmployeeDeleteParams,
  EmployeeByIdParams,
} from 'domain/usecases/employer/employer-params';

import {
  InvalidCredentialsError,
  UnexpectedError,
} from '../../../domain/errors';
import { HttpStatusCode } from '../../protocols/http';

export class RemoteEmployee implements IEmployee {
  constructor(
    private readonly url: string,
    private readonly httpClient,
  ) {}

  async getAllEmployee(params: EmployeeParams): Promise<EmployerModel> {
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

  async getEmployeeById(
    params: EmployeeByIdParams,
  ): Promise<EmployerByIdModel> {
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

  async deleteEmployee(params: EmployeeDeleteParams): Promise<void> {
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
