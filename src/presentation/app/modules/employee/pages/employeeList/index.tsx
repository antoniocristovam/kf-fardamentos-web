import { IEmployee } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useEmployee } from '../../hook/useEmployee';
import EmployeeView from '../employeeList/view';

interface IProps {
  employee: IEmployee;
}

const EmployeeListIndex = ({ employee }: IProps) => {
  // States
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Hooks
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const { requestGetAllEmployee, requestDeleteEmployee, employeeList } =
    useEmployee({ employee });

  const handleNewPageChangeEmployees = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePerRowsChangeEmployees = (newPerPage: number, page: number) => {
    setCurrentPage(page);
    setPageSize(newPerPage);
  };

  // useEffect

  useEffect(() => {
    requestGetAllEmployee({
      page: currentPage,
      size: pageSize,
      userToken: currentUser.token,
    });
  }, [currentPage, pageSize]);

  return (
    <EmployeeView
      navigate={navigate}
      currentUser={currentUser}
      requestDeleteEmployee={requestDeleteEmployee}
      employeeList={employeeList}
      handleNewPageChangeEmployees={handleNewPageChangeEmployees}
      handlePerRowsChangeEmployees={handlePerRowsChangeEmployees}
    />
  );
};

export default EmployeeListIndex;
