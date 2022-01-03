import React from 'react';
import RcDropDown from 'rc-dropdown';
import { DropDownWrapper } from './style';
import { IDropDownProps } from './index.type';
import 'rc-dropdown/assets/index.css';

const DropDown: React.FC<IDropDownProps> = ({
  children,
  trigger = ['click'],
  ...props
}) => {
  return (
    <DropDownWrapper>
      <RcDropDown trigger={trigger} {...props}>
        <div>{children}</div>
      </RcDropDown>
    </DropDownWrapper>
  );
};

export default DropDown;
