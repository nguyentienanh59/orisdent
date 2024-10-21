import { IBreadcrumb, SiteBreadcrumb } from '@/common/components/bread-crumb/Breadcrum';
import { cookie } from '@/common/helpers/cookie/cookie';
import { Affix, Button, Layout, Row, Space } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Header } from 'antd/es/layout/layout';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './AdminLayout.module.scss';
import LeftNav from '@/common/components/left-nav/LeftNav';
import Logo from '@/assets/images/Logo.png';

export interface IProps {
  children?: React.ReactNode;
  breadcrumbItems: IBreadcrumb[];
}

const MENU_WIDTH = 221;

const AdminLayout: React.FC<IProps> = (props) => {
  const { Content } = Layout;
  const navigate = useNavigate();

  const handleLogout = () => {
    cookie.clearCookie('user');
    navigate('/login');
  };

  useEffect(() => {
    const user = cookie.getCookie('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Layout className={styles.masterLayout}>
        <Sider
          className={`${styles.masterSider} dt-scrollbar`}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            transition: 'none 0s ease 0s',
            background: 'rgba(255, 255, 255, 0.2)'
          }}
          collapsible
          collapsed={false}
          width={MENU_WIDTH}
          trigger={null}
        >
          <img style={{ height: '5rem', width: '100%', objectFit: 'contain' }} src={Logo} alt="" />
          <LeftNav />
        </Sider>
        <Layout className={styles.siteLayout}>
          <Affix className={styles.siteLayoutAffix} offsetTop={0}>
            <Header style={{ padding: '0 20px', background: '#fff', borderBottom: `1px solid #EEF2F5` }}>
              <Row justify="space-between" align="middle" style={{ height: '100%' }}>
                <div className={styles.layoutHeader}>
                  <SiteBreadcrumb items={props.breadcrumbItems}></SiteBreadcrumb>
                </div>
                <Space size={16}>
                  <Button type="primary" onClick={handleLogout} style={{ marginRight: '20px' }}>
                    Đăng xuất
                  </Button>
                </Space>
              </Row>
            </Header>
          </Affix>
          <Content className={styles.content}>
            <div className={styles.contentCard}>{props.children}</div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default React.memo(AdminLayout);
