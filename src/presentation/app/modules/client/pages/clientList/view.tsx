import { ClientsModel } from 'domain/models';
import { ClientsDeleteParams } from 'domain/usecases/clients/clients-params';
import { DataTable } from 'presentation/app/components/datatable';
import { FloatButton } from 'presentation/app/components/floatButton';
import { PageWrapper } from 'presentation/app/components/page-wrapper';
import { IUserModel } from 'presentation/app/hooks/useAuth';
import { NavigateFunction } from 'react-router-dom';
import { Card } from 'reactstrap';

import { makeColumnsClients } from '../../common/columnsTable';

interface IProps {
  currentUser: IUserModel;
  clientsList: ClientsModel;
  navigate: NavigateFunction;
  requestDeleteCliente: (params: ClientsDeleteParams) => void;
  handleNewPageChangeClients: (page: number) => void;
  handlePerRowsChangeClients: (newPerPage: number, page: number) => void;
}

const ClientView = ({
  navigate,
  clientsList,
  currentUser,
  requestDeleteCliente,
  handlePerRowsChangeClients,
  handleNewPageChangeClients,
}: IProps) => {
  return (
    <PageWrapper title="Listagem de clientes">
      <FloatButton handleButton={() => navigate('/cliente/novo')} />
      <Card>
        <DataTable
          columns={makeColumnsClients()}
          data={clientsList?.content || []}
          paginationTotalRows={clientsList?.totalItems}
          handleNewPageChange={handleNewPageChangeClients}
          handlePerRowsChange={handlePerRowsChangeClients}
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
          handleDelete={(id) =>
            requestDeleteCliente({ id: id, userToken: currentUser.token })
          }
          canSearch={false}
        />
      </Card>
    </PageWrapper>
  );
};

export default ClientView;
