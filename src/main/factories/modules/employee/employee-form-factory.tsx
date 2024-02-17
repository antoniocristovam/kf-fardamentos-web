import { makeRemoteEmployee } from 'main/factories/usecases/employee/employee-factory';
import EmployeeFormIndex from 'presentation/app/modules/employee/pages/employeeForm';
import React from 'react';

export const MakeFormEmployee: React.FC = () => {
  return <EmployeeFormIndex employee={makeRemoteEmployee()} />;
};
