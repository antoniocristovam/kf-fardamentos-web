export type ClientsModel = {
  page: number;
  size: number;
  totalItems: number;
  totalPages: number;
  content: [
    {
      name: string;
      email: string;
      cpf_cnpj: string;
      firstPhoneNumber: string;
      thirdPhoneNumber: string;
      secondPhoneNumber: string;
    },
  ];
};

export type ClientsByIdModel = {
  name: string;
  email: string;
  cpf_cnpj: string;
  thirdPhoneNumber: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  addresses: [
    {
      id: string;
      city: string;
      state: string;
      street: string;
      parish: string;
      number: string;
      clientId: string;
      community: string;
      postalCode: string;
      neighborhood: string;
      aditionalInformation: string;
    },
  ];
};

export type ClientsCreateModel = {
  name: string;
  email: string;
  cpf_cnpj: string;
  firstPhoneNumber: string;
  thirdPhoneNumber: string;
  secondPhoneNumber: string;
  addresses: {
    city: string;
    state: string;
    street: string;
    number: string;
    postalCode: string;
    neighborhood: string;
    aditionalInformation: string;
  }[];
};

export type ClientsCreateResponse = {
  error: string;
  message: string;
  statusCode: string;
};
