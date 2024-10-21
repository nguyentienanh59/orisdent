import { routers } from '@/router/RouterCongfig';
import { Menu, MenuProps } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router';
import styles from './LeftNav.module.scss';

type MenuItem = Required<MenuProps>['items'][number];
export type CustomMenuItem = MenuItem & {
  path?: string;
  children?: CustomMenuItem[];
};
interface ILeftNavProps {
  onMenuClick?: (key: string) => void;
}
interface IMenuClickEvent {
  key: string;
  keyPath: string[];
}

const navItems: CustomMenuItem[] = [
  {
    label: 'Mã khách hàng',
    path: '/admin',
    key: 'admin'
  }
];

const LeftNav: React.FC<ILeftNavProps> = (props) => {
  const [selectedKey, setSelectedKey] = useState<string[]>(['']);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const matchRoutesList = matchRoutes(routers as A, location);
    if (matchRoutesList?.length && matchRoutesList.length > 0) {
      const theRouteDetails = matchRoutesList[matchRoutesList.length - 1];
      const theRoute = theRouteDetails?.route as A;
      const currentKey = theRoute?.meta?.leftKey;
      if (currentKey) {
        const activeKey = findItemNodeByKeyOrPath('key', currentKey);
        if (activeKey) {
          setSelectedKey([activeKey.key as string]);
          return;
        }
      } else {
        setSelectedKey(['']);
        getIncludeKeyByPath(theRoute.path);
        return;
      }
    } else {
      getIncludeKeyByPath(location.pathname);
    }
  }, [location.pathname]);

  const getIncludeKeyByPath = (pathName?: string) => {
    const defaultPathList = pathName?.split('/');
    const defaultPath = `/${defaultPathList?.[1] ?? ''}`;
    const currentInclude = navItems.find((item) => item.path?.includes(defaultPath));
    if (currentInclude) {
      setSelectedKey([currentInclude.key as string]);
    }
  };

  const menuClick = (info: IMenuClickEvent) => {
    if (info.key) {
      setSelectedKey([info.key]);
      const path = findItemNodeByKeyOrPath('key', info.key)?.path;
      path && navigate(path);
      props?.onMenuClick?.(info.key);
    }
  };

  const findItemNodeByKeyOrPath = (key: 'key' | 'path', keyValue: string): CustomMenuItem | null => {
    if (!navItems || !keyValue) return null;
    const treeList = [...navItems];
    while (treeList.length > 0) {
      const treeItem = treeList.shift();
      if (!treeItem) return null;
      if (treeItem[key] === keyValue) {
        return treeItem;
      }
      treeItem.children?.forEach((child) => {
        treeList.push(child as CustomMenuItem);
      });
    }
    return null;
  };

  return (
    <Menu
      className={styles.leftNav}
      selectedKeys={selectedKey}
      inlineIndent={12}
      mode="inline"
      items={navItems}
      onClick={menuClick}
    />
  );
};

export default React.memo(LeftNav);
