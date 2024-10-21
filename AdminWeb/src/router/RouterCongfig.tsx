import { lazy } from 'react';
import CheckDentalRouter from './routers/CheckDental';

const AdminLayout = lazy(() => import('../AdminLayout'));
const LoginNav = lazy(() => import('@/components/login-nav/LoginNav'));

export const routers: IRouter.IRoute[] = [
  {
    path: '/admin',
    element: AdminLayout,
    name: 'admin',
    meta: { pageTitle: 'admin' },
    children: [...CheckDentalRouter]
  },
  {
    path: '/login',
    element: LoginNav,
    name: 'login',
    meta: { pageTitle: 'login' }
  }
];
