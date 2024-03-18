import React from 'react';

import { makeSessionStorage } from '../../../../main/factories/http/session-storage-factory';
import { Login } from '../../../../presentation/app/modules/Authentication/pages/login/index';
import { makeRemoteAuthentication } from '../../usecases/authentication/authentication-factory';

export const MakeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      session={makeSessionStorage()}
    />
  );
};
