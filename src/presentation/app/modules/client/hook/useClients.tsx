import { IClients } from 'domain/usecases';
import {
  ClientsByIdParams,
  ClientsDeleteParams,
  ClientsParams,
} from 'domain/usecases/clients/clients-params';
import { notifyError, notifySuccess } from 'presentation/app/components/notify';
import { useAppSelector } from 'presentation/config/hooks/useRedux';
import { getClientsById } from 'presentation/config/store/client/clientByIdSlice';
import { getClients } from 'presentation/config/store/client/clientListSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Interface
interface IProps {
  clients: IClients;
}

export const useClients = ({ clients }: IProps) => {
  // Hook
  const dispatch = useDispatch();

  const { clients: clientsList } = useAppSelector((state) => state.clients);
  const { clientsById } = useAppSelector((state) => state.clientsById);

  const requestGetAllClients = useCallback((params: ClientsParams) => {
    clients
      .getAllClients({
        page: params.page,
        size: params.size,
        userToken: params.userToken,
      })
      .then((res) => {
        dispatch(getClients(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const requestGetClientsById = useCallback((params: ClientsByIdParams) => {
    clients
      .getClientsById({
        id: params.id,
        userToken: params.userToken,
      })
      .then((res) => {
        dispatch(getClientsById(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const requestDeleteCliente = (params: ClientsDeleteParams) => {
    clients
      .deleteClients({ id: params.id, userToken: params.userToken })
      .then(() => {
        notifySuccess('Cliente deletado com sucesso!');
      })
      .catch((err) => {
        notifyError(err?.message || 'Ocorreu um erro ao deletar um cliente');
      });
  };

  return {
    clientsList,
    clientsById,
    requestGetAllClients,
    requestGetClientsById,
    requestDeleteCliente,
  };
};
