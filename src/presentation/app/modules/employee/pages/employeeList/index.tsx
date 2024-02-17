import { IEmployee } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useEmployee } from '../../hook/useEmployee';
import EmployeeView from '../employeeList/view';

interface IProps {
  employee: IEmployee;
}

const EmployeeListIndex = ({ employee }: IProps) => {
  // Hook
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { requestGetAllEmployee, requestDeleteEmployee, employeeList } =
    useEmployee({ employee });

  // useEffect
  useEffect(() => {
    requestGetAllEmployee({
      page: '1',
      size: '10',
      userToken: currentUser.token,
    });
  }, []);

  return (
    <EmployeeView
      navigate={navigate}
      currentUser={currentUser}
      requestDeleteEmployee={requestDeleteEmployee}
      employeeList={employeeList}
    />
  );
};

export default EmployeeListIndex;
