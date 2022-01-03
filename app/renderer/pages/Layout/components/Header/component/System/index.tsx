import React from 'react';
import { DropDownComponent } from '../../../../../../components';
import SearchInputOverlay from './components/SearchInputOverlay';

const searchBlack = require('../../../../../../assets/image/search-black.svg');

const System: React.FC = () => {
  return (
    <div className="system">
      <DropDownComponent
        overlay={<SearchInputOverlay />}
        trigger={['click']}
        align={{ offset: [1000, 13] }}
      >
        <div className="search-input">
          <img src={searchBlack} alt="" />
          <input placeholder="搜索" />
        </div>
      </DropDownComponent>
    </div>
  );
};

export default System;
