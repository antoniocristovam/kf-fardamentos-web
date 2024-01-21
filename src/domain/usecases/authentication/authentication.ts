import { IUserModel } from 'presentation/app/hooks/useAuth';

export type AuthenticationParams = {
  cpf: string;
  password: string;
};

export interface IAuthentication {
  auth: (params: AuthenticationParams) => Promise<IUserModel>;
}
