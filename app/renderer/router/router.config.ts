import React from 'react';
import { IMenuDataItem } from './index.type';

const routers: IMenuDataItem[] = [
  {
    path: '/com_1',
    name: 'com_1',
    component: React.lazy(() => import('../pages/Page1/components/Component1')),
  },
  {
    path: '/com_2',
    name: 'com_2',
    component: React.lazy(() => import('../pages/Page1/components/Component2')),
  },
  {
    path: '/page_2',
    name: 'page_2',
    component: React.lazy(() => import('../pages/Page2')),
  },
];

export default routers;
