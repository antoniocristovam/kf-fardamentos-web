import { IClients } from 'domain/usecases';
import {
  ClientsByIdParams,
  ClientsParams,
} from 'domain/usecases/clients/clients-params';
import { useAppSelector } from 'presentation/config/hooks/useRedux';
import { getClients } from 'presentation/config/store/client/clientSlice';
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
        // dispatch(getClients(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    clientsList,
    requestGetAllClients,
    requestGetClientsById,
  };
};
