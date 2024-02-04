import { IClients } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useClients } from '../../hook/useClients';
import ClientFormView from './view';

interface IProps {
  clients: IClients;
}

const ClientFormIndex = ({ clients }: IProps) => {
  // Hook
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { requestGetClientsById } = useClients({ clients });

  //useEffect

  if (id) {
    useEffect(() => {
      requestGetClientsById({ id: id, userToken: currentUser.token });
    }, []);
  }

  return <ClientFormView navigate={navigate} />;
};

export default ClientFormIndex;
