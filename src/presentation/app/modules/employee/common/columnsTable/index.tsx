import { TableColumn } from 'react-data-table-component';

import { EmployeeColumns } from '../../models/data/employeeColumns';

export const makeColumnsEmployee = (): TableColumn<EmployeeColumns>[] => {
  return [
    {
      name: 'Nome',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'CPF / CNPJ',
      selector: (row) => row.cpf,
      sortable: true,
    },
    {
      name: 'Cargo',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
  ];
};
