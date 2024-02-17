import { IEmployee } from 'domain/usecases';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import EmployeeFormView from './view';

interface IProps {
  employee: IEmployee;
}

const EmployeeFormIndex = ({ employee }: IProps) => {
  const navigate = useNavigate();
  return <EmployeeFormView navigate={navigate} />;
};

export default EmployeeFormIndex;
