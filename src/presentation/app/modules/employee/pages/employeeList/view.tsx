import { DataTable } from 'presentation/app/components/datatable';
import { FloatButton } from 'presentation/app/components/floatButton';
import { PageWrapper } from 'presentation/app/components/page-wrapper';
import React from 'react';
import { Card } from 'reactstrap';

const EmployeeView = () => {
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];

  return (
    <PageWrapper title="Funcionários">
      <FloatButton />
      <Card>
        <DataTable
          columns={columns}
          data={data}
          title={'Clientes'}
          loading={false}
          actions={[
            {
              id: 1,
              name: 'edit',
              label: 'Editar',
              icon: 'ri-edit-line',
              classNameColorIcon: 'primary',
              // onPress: (cellProps) => navigate(`/pacientes/${cellProps.id}`),
            },
          ]}
          canSearch={false}
          keysSearch={[]}
        />
      </Card>
    </PageWrapper>
  );
};

export default EmployeeView;
