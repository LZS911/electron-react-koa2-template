import * as React from 'react';
import Header from './components/Header';
import Sider from './components/Sider';
import { LayoutWrapper } from './style';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <div className="header">
          <Header />
        </div>
        <div className="wrapper">
          <div className="sider">
            <Sider />
          </div>
          <div className="content">{children}</div>
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
