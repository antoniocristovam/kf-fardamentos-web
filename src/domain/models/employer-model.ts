export type EmployerModel = {
  page: string;
  size: string;
  totalItems: string;
  totalPages: string;
  content: [
    {
      cpf: string;
      name: string;
      role: string;
      email: string;
      createdAt: string;
      isActive: boolean;
      phoneNumber: string;
      departamentId: string;
    },
  ];
};

export type EmployerByIdModel = {
  cpf: string;
  name: string;
  email: string;
  createdAt: string;
  isActive: boolean;
  role: string;
  phoneNumber: string;
  departamentId: string;
};
