import { ClientsCreateModel } from 'domain/models';

export type ClientsParams = {
  page: number;
  size: number;
  userToken: string;
};

export type ClientsByIdParams = {
  id: string;
  userToken: string;
};

export type ClientsDeleteParams = {
  id: string;
  userToken: string;
};

export type ClientsCreateParams = {
  userToken: string;
  valueToSubmit: ClientsCreateModel;
};
