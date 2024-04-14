// Login
import { Logout } from 'presentation/app/modules/authentication/pages/logout';

import { MakeLogin } from '../factories/modules/authentication/login-factory';

const publicRoutes = [
  { path: '/login', component: <MakeLogin /> },
  { path: '/logout', component: <Logout /> },
];

export { publicRoutes };
