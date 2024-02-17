import { IEmployee } from 'domain/usecases';
import { useNavigate } from 'react-router-dom';

import EmployeeView from '../employeeList/view';

interface IProps {
  employee: IEmployee;
}

const EmployeeListIndex = ({ employee }: IProps) => {
  const navigate = useNavigate();
  return <EmployeeView navigate={navigate} />;
};

export default EmployeeListIndex;
