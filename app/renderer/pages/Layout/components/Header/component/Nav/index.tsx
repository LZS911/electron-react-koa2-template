import React from 'react';
import { useLocation } from 'react-router';
import { TabsComponent } from '../../../../../../components';
import { navList } from './index.data';

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const filterNavList = React.useMemo(() => {
    const menu = navList.find((v) => v.menu === pathname);
    if (menu) {
      return menu.subMenu;
    }
    const subMenu = navList.find((v) =>
      v.subMenu.some((m) => m.path === pathname)
    )?.subMenu;
    if (subMenu) {
      return subMenu;
    }
    return [];
  }, [pathname]);

  return (
    <div className="nav">
      <TabsComponent list={filterNavList} />
    </div>
  );
};
export default Nav;
