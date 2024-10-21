import Router from '@/common/router/router';
import { App as AntdApp, ConfigProvider } from 'antd';
import { BreadcrumbProvider } from './common/components/bread-crumb/Breadcrum';
import { routers } from './router/RouterCongfig';

const App = () => {
  return (
    <>
      <ConfigProvider>
        <AntdApp style={{ height: '100%' }}>
          <BreadcrumbProvider>
            <Router routers={routers}></Router>
          </BreadcrumbProvider>
        </AntdApp>
      </ConfigProvider>
    </>
  );
};

export default App;
