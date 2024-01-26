import { IClients } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useClients } from '../../hook/useClients';
import ClientView from '../clientList/view';

interface IProps {
  clients: IClients;
}

const ClientListIndex = ({ clients }: IProps) => {
  const { currentUser } = useAuth();

  const { requestGetAllClients, clientsList } = useClients({ clients });
  const navigate = useNavigate();

  useEffect(() => {
    requestGetAllClients({
      page: '1',
      size: '10',
      userToken: currentUser.token,
    });
  }, []);

  // const clientsIdList = (clientsList?.content || []).map((idClients) => ({
  //   id: idClients.cpf_cnpj,
  // }));

  return <ClientView navigate={navigate} clientsList={clientsList} />;
};

export default ClientListIndex;
