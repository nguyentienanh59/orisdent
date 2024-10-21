import { Outlet } from 'react-router';
import AdminLayout from './admin/layout/AdminLayout';
import { useBreadcrumb } from './common/components/bread-crumb/Breadcrum';
import { useLoading } from './common/context/useLoading';
import LazyLoading from './common/components/lazy-loading/LazyLoading';

const Layout = () => {
  const { isLoading } = useLoading();
  const { items } = useBreadcrumb();

  return (
    <>
      <AdminLayout breadcrumbItems={items}>
        <Outlet></Outlet>
      </AdminLayout>
      {isLoading && <LazyLoading />}
    </>
  );
};

export default Layout;
