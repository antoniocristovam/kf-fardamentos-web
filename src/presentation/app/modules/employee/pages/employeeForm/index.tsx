import { IEmployee } from 'domain/usecases';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useEmployee } from '../../hook/useEmployee';
import EmployeeFormView from './view';

interface IProps {
  employee: IEmployee;
}

const EmployeeFormIndex = ({ employee }: IProps) => {
  //Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { requestGetEmployeeById } = useEmployee({ employee });

  //useEffect
  if (id) {
    useEffect(() => {
      requestGetEmployeeById({ id: id, userToken: currentUser.token });
    }, []);
  }
  return <EmployeeFormView navigate={navigate} />;
};

export default EmployeeFormIndex;
