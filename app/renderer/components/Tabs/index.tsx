import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TabsWrapper } from './style';
import { ITabsProps } from './index.type';
import { classnames } from '../../utils';

const Tabs: React.FC<ITabsProps> = (props) => {
  const { list } = props;
  const { pathname } = useLocation();
  return (
    <>
      <TabsWrapper>
        {list.map((v) => {
          return (
            <Link
              className={classnames(
                ['tab-item', 'tab-item-active'],
                [true, pathname === v.path]
              )}
              key={v.path}
              to={v.path}
            >
              {v.label}
            </Link>
          );
        })}
      </TabsWrapper>
    </>
  );
};

export default Tabs;
