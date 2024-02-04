export type ClientsModel = {
  page: string;
  size: string;
  totalItems: string;
  totalPages: string;
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
  cpf_cnpj: string;
  name: string;
  email: string;
  firstPhoneNumber: string;
  secondPhoneNumber: string;
  thirdPhoneNumber: string;
  addresses: [
    {
      id: string;
      postalCode: string;
      state: string;
      street: string;
      city: string;
      neighborhood: string;
      number: string;
      aditionalInformation: string;
      parish: string;
      community: string;
      clientId: string;
    },
  ];
};
