import { IClients } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect, useState } from 'react';
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

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleNewPageChangeClients = (newPage: number) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  const handlePerRowsChangeClients = (newPerPage: number, page: number) => {
    setCurrentPage(page);
    setPageSize(newPerPage);
  };

  // useEffect
  useEffect(() => {
    requestGetAllClients({
      page: currentPage,
      size: pageSize,
      userToken: currentUser.token,
    });
  }, [currentPage, pageSize]);

  return (
    <ClientView
      navigate={navigate}
      clientsList={clientsList}
      currentUser={currentUser}
      requestDeleteCliente={requestDeleteCliente}
      handleNewPageChangeClients={handleNewPageChangeClients}
      handlePerRowsChangeClients={handlePerRowsChangeClients}
    />
  );
};

export default ClientListIndex;
