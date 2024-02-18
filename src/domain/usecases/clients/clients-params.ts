import { ClientsCreateModel } from 'domain/models';

export type ClientsParams = {
  page: string;
  size: string;
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
