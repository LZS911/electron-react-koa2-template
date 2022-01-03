import React from 'react';
import { useDispatch } from 'react-redux';
import { INavList } from '../../common/type';
import { headerNavActions } from '../../store/action/headerNav';

export default function useSetNavList(navList: INavList[]) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(headerNavActions.setNavList(navList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
