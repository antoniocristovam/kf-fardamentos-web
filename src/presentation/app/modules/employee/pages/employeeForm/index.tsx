import React from 'react';
import { useNavigate } from 'react-router-dom';

import EmployeeFormView from './view';

const EmployeeFormIndex = () => {
  const navigate = useNavigate();
  return <EmployeeFormView navigate={navigate} />;
};

export default EmployeeFormIndex;
