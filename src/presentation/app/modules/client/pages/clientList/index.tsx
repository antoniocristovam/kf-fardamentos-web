import { IClients } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useClients } from '../../hook/useClients';
import ClientView from '../clientList/view';

interface IProps {
  clients: IClients;
}

const ClientListIndex = ({ clients }: IProps) => {
  // Hooks
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { requestGetAllClients, clientsList, requestDeleteCliente } =
    useClients({ clients });

  // useEffect
  useEffect(() => {
    requestGetAllClients({
      page: '1',
      size: '10',
      userToken: currentUser.token,
    });
  }, []);

  return (
    <ClientView
      navigate={navigate}
      clientsList={clientsList}
      currentUser={currentUser}
      requestDeleteCliente={requestDeleteCliente}
    />
  );
};

export default ClientListIndex;
