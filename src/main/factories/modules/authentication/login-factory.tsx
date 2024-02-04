import { Login } from 'presentation/app/modules/authentication/pages/login';
import React from 'react';

import { makeSessionStorage } from '../../../../main/factories/http/session-storage-factory';
import { makeRemoteAuthentication } from '../../usecases/authentication/authentication-factory';

export const MakeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      session={makeSessionStorage()}
    />
  );
};
