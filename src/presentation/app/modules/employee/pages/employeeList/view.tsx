import { EmployeeModel } from 'domain/models';
import { EmployeeDeleteParams } from 'domain/usecases/employee/employee-params';
import { DataTable } from 'presentation/app/components/datatable';
import { FloatButton } from 'presentation/app/components/floatButton';
import { PageWrapper } from 'presentation/app/components/page-wrapper';
import { IUserModel } from 'presentation/app/hooks/useAuth';
import { NavigateFunction } from 'react-router-dom';
import { Card } from 'reactstrap';

import { makeColumnsEmployee } from '../../common/columnsTable';

interface IProps {
  navigate: NavigateFunction;
  requestDeleteEmployee: (params: EmployeeDeleteParams) => void;

  currentUser: IUserModel;
  employeeList: EmployeeModel;
}

const EmployeeListView = ({
  navigate,
  requestDeleteEmployee,

  currentUser,
  employeeList,
}: IProps) => {
  return (
    <PageWrapper title="Listagem de Funcionários">
      <FloatButton handleButton={() => navigate('/funcionario/novo')} />
      <Card>
        <DataTable
          columns={makeColumnsEmployee()}
          data={employeeList?.content || []}
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
            requestDeleteEmployee({ id: id, userToken: currentUser.token })
          }
          canSearch={false}
        />
      </Card>
    </PageWrapper>
  );
};

export default EmployeeListView;
