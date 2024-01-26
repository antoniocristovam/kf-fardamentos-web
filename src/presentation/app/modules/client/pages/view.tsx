import { ClientsModel } from 'domain/models';
import { DataTable } from 'presentation/app/components/datatable';
import { FloatButton } from 'presentation/app/components/floatButton';
import { PageWrapper } from 'presentation/app/components/page-wrapper';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Card } from 'reactstrap';

import { makeColumnsClients } from '../common/columnsTable';

interface IProps {
  clientsList: ClientsModel;
  navigate: NavigateFunction;
}

const ClientView = ({ clientsList, navigate }: IProps) => {
  return (
    <PageWrapper title="Clientes">
      <FloatButton />
      <Card>
        <DataTable
          columns={makeColumnsClients()}
          data={clientsList?.content || []}
          title={'Clientes'}
          loading={false}
          actions={[
            {
              id: 1,
              name: 'edit',
              label: 'Editar',
              icon: 'ri-edit-line',
              classNameColorIcon: 'primary',
              onPress: (cellProps) => navigate(`/pacientes/${cellProps.id}`),
            },
          ]}
          canSearch={false}
          keysSearch={[]}
        />
      </Card>
    </PageWrapper>
  );
};

export default ClientView;
