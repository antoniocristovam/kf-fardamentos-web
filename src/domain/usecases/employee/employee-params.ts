export type EmployeeParams = {
  page: number;
  size: number;
  userToken: string;
};

export type EmployeeByIdParams = {
  id: string;
  userToken: string;
};

export type EmployeeDeleteParams = {
  id: string;
  userToken: string;
};
