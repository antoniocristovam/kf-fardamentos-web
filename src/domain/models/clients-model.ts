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
