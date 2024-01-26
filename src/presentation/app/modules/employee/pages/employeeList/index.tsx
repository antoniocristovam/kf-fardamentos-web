import React from 'react';
import { useNavigate } from 'react-router-dom';

import EmployeeView from '../employeeList/view';

const EmployeeListIndex = () => {
  const navigate = useNavigate();
  return <EmployeeView navigate={navigate} />;
};

export default EmployeeListIndex;
