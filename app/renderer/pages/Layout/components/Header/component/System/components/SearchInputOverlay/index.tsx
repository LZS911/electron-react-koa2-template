import React from 'react';
import { OverlayWrapper } from './style';

const deleteSearchRecord = require('../../../../../../../../assets/image/delete-search-record.svg');

const SearchInputOverlay: React.FC = () => {
  return (
    <>
      <OverlayWrapper>
        <div className="search-history">
          <div className="header">
            <div>
              <span>搜索历史</span>
              <img src={deleteSearchRecord} alt="" />
            </div>

            <span>查看全部</span>
          </div>
          <div className="content" />
        </div>
      </OverlayWrapper>
    </>
  );
};

export default SearchInputOverlay;
