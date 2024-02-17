import { makeRemoteEmployee } from 'main/factories/usecases/employee/employee-factory';
import EmployeeListIndex from 'presentation/app/modules/employee/pages/employeeList';
import React from 'react';

export const MakeListEmployee: React.FC = () => {
  return <EmployeeListIndex employee={makeRemoteEmployee()} />;
};
