import { MakeClients } from 'main/factories/modules/clients/clients-factory';
import DashboardIndex from 'presentation/app/modules/dashboard/pages';
import EmployeeIndex from 'presentation/app/modules/employee/pages';
import RequestIndex from 'presentation/app/modules/requested/pages';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../presentation/app/hooks/useAuth';

export const PrivateRoutes = (props: any) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return <>{props.children}</>;
};

const privateRoutes = [
  // Dashboard
  {
    path: '/dashboard',
    exact: true,
    component: <DashboardIndex />,
  },

  // Pedidos
  {
    path: '/pedido',
    exact: true,
    component: <RequestIndex />,
  },

  // Clientes
  {
    path: '/cliente',
    exact: true,
    component: <MakeClients />,
  },

  // Funcionário
  {
    path: '/funcionario',
    exact: true,
    component: <EmployeeIndex />,
  },

  { path: '*', component: <Navigate to="/dashboard" /> },
];

export { privateRoutes };
