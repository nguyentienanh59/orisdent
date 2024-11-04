import { lazy } from 'react';

const CheckDental = lazy(() => import('@/admin/checkdental-page/CheckDental'));

const routes: IRouter.IRoute[] = [
  {
    path: '/',
    element: CheckDental,
    name: 'admin',
    meta: { pageTitle: 'admin' },
    children: []
  }
];
export default routes;
