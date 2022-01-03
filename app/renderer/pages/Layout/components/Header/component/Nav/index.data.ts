import { INavList } from '../../../../../../common/type';

export const navList: INavList[] = [
  {
    menu: '/page_1',
    subMenu: [
      { path: '/com_1', label: 'com1' },
      { path: '/com_2', label: 'com2' },
    ],
  },
  {
    menu: '/page_2',
    subMenu: [],
  },
];
