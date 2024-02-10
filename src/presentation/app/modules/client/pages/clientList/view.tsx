import { ClientsModel } from 'domain/models';
import { DataTable } from 'presentation/app/components/datatable';
import { FloatButton } from 'presentation/app/components/floatButton';
import { PageWrapper } from 'presentation/app/components/page-wrapper';
import { NavigateFunction } from 'react-router-dom';
import { Card } from 'reactstrap';

import { makeColumnsClients } from '../../common/columnsTable';

interface IProps {
  clientsList: ClientsModel;
  navigate: NavigateFunction;
}

const ClientView = ({ clientsList, navigate }: IProps) => {
  return (
    <PageWrapper title="Listagem de clientes">
      <FloatButton handleButton={() => navigate('/cliente/novo')} />
      <Card>
        <DataTable
          columns={makeColumnsClients()}
          data={clientsList?.content || []}
          actions={[
            {
              cpf_cnpj: 1,
              name: 'edit',
              label: 'Editar',
              onPress: (cellProps) => {
                navigate(`/cliente/${cellProps.cpf_cnpj}`);
              },
              icon: 'ri-pencil-fill',
              classNameColorIcon: 'primary',
            },
          ]}
          title={''}
          loading={true}
          // handleDelete={(id) => handleDelete(id)}
          handleDelete={(id) => console.log('oi', id)}
          canSearch={false}
        />
      </Card>
    </PageWrapper>
  );
};

export default ClientView;
