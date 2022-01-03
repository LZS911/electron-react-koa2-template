import React from 'react';
import { HeaderWrapper } from './style';
import Control from './component/Control';
import Nav from './component/Nav';
import System from './component/System';

const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrapper>
      <Control />
      <Nav />
      <System />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
