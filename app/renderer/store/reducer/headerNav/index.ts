import { fromJS, Map } from 'immutable';
import { handleActions, Action } from 'redux-actions';
import { GetHeaderNavType } from '../../action/headerNav';

export type IHeaderNavState = Map<
  'navList' | 'currentMenu' | 'currentSubMenu',
  any
>;

const initState = fromJS({
  navList: [],
  currentMenu: 'discoverMusic',
  currentSubMenu: 'recommendation',
});

export const HeaderNavReducer = handleActions<IHeaderNavState, any>(
  {
    [GetHeaderNavType.Set_CurrentMenu]: (
      state,
      { payload: { currentMenu } }: Action<{ currentMenu: string }>
    ) => {
      return state.set('currentMenu', currentMenu);
    },
    [GetHeaderNavType.Set_CurrentSubMenu]: (
      state,
      { payload: { currentSubMenu } }: Action<{ currentSubMenu: string }>
    ) => {
      return state.set('currentSubMenu', currentSubMenu);
    },
    [GetHeaderNavType.Set_NavList]: (
      state,
      { payload: { navList } }: Action<{ navList: any[] }>
    ) => {
      return state.set('navList', navList);
    },
  },
  initState as any
);
