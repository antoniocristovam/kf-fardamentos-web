import { IEmployee } from 'domain/usecases';
import {
  EmployeeDeleteParams,
  EmployeeParams,
  EmployeeByIdParams,
} from 'domain/usecases/employee/employee-params';
import { notifyError, notifySuccess } from 'presentation/app/components/notify';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Interface
interface IProps {
  employee: IEmployee;
}

export const useEmployee = ({ employee }: IProps) => {
  // Hook
  const dispatch = useDispatch();

  // const { clients: clientsList } = useAppSelector((state) => state.clients);
  // const { clientsById } = useAppSelector((state) => state.clientsById);

  const requestGetAllEmployee = useCallback((params: EmployeeParams) => {
    employee
      .getAllEmployee({
        page: params.page,
        size: params.size,
        userToken: params.userToken,
      })
      .then((res) => {
        // dispatch(getClients(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const requestGetEmployeeById = useCallback((params: EmployeeByIdParams) => {
    employee
      .getEmployeeById({
        id: params.id,
        userToken: params.userToken,
      })
      .then((res) => {
        // dispatch(getClientsById(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const requestDeleteEmployee = (params: EmployeeDeleteParams) => {
    employee
      .deleteEmployee({ id: params.id, userToken: params.userToken })
      .then(() => {
        notifySuccess('Funcionário deletado com sucesso!');
      })
      .catch((err) => {
        notifyError(
          err?.message || 'Ocorreu um erro ao deletar um funcionário',
        );
      });
  };

  return {
    requestGetAllEmployee,
    requestGetEmployeeById,
    requestDeleteEmployee,
  };
};
