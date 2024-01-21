import { TableColumn } from 'react-data-table-component';

import { ClientsColumns } from '../../models/data/clientsColumns';

export const makeColumnsClients = (): TableColumn<ClientsColumns>[] => {
  return [
    {
      name: 'Nome',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'CPF / CNPJ',
      selector: (row) => row.cpf_cnpj,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: (row) => row.firstPhoneNumber,
      sortable: true,
    },
  ];
};
