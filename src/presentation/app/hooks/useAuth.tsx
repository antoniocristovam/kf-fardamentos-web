// React
import {
  FC,
  Dispatch,
  useState,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

// Helpers
import { WithChildren } from '../../config/helpers';

// This file provides some helper functions to get authentication and logged in user.
export interface IUserModel {
  token: string;
  refreshToken: string;
  user: {
    cpf: string;
    name: string;
    email: string;
    createdAt: string;
    isActive: boolean;
    role: string;
    phoneNumber: string;
  };
}

type AuthContextProps = {
  auth: IUserModel | undefined;
  saveAuth: (auth: IUserModel | undefined) => void;
  currentUser: IUserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<IUserModel | undefined>>;
  logout: () => void;
  getLoggedUser: () => IUserModel | undefined;
};

const initAuthContextPropsState = {
  auth: undefined,
  logout: () => {},
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  getLoggedUser: () => undefined,
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const getLoggedUser = () => {
    const user = sessionStorage.getItem('authUser');
    if (!user) {
      return undefined;
    } else {
      return JSON.parse(user);
    }
  };

  /* 
    1. Quando o usuário fizer login, criar um identificar de sessão para ele.
    2. Armazenar identificador em um cookie.
    3. Sempre que o usuário fizer uma requisição, usar o id da sessão (extraído do cookie) para recuperar os detalhes da conta
  */

  const [auth, setAuth] = useState<IUserModel | undefined>();
  const [currentUser, setCurrentUser] = useState<IUserModel | undefined>(
    getLoggedUser(),
  );

  console.log(currentUser);

  const saveAuth = (auth: IUserModel | undefined) => {
    setAuth(auth);
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
    sessionStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        saveAuth,
        currentUser,
        setCurrentUser,
        logout,
        getLoggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
