export interface INavList {
  menu: string;
  subMenu: ISubMenu[];
}

export interface ISubMenu {
  path: string;
  label: string;
}
