import { DataTable } from 'presentation/app/components/datatable';
import { FloatButton } from 'presentation/app/components/floatButton';
import { PageWrapper } from 'presentation/app/components/page-wrapper';
import { NavigateFunction } from 'react-router-dom';
import { Card } from 'reactstrap';

interface IProps {
  navigate: NavigateFunction;
}

const EmployeeListView = ({ navigate }: IProps) => {
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
    <PageWrapper title="Listagem de Funcionários">
      <FloatButton handleButton={() => navigate('/funcionario/novo')} />
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

export default EmployeeListView;
