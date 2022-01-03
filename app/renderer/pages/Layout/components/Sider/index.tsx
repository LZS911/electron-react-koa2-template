import React from 'react';
import { Link } from 'react-router-dom';
import { siderList } from './index.data';

const MusicSider: React.FC = () => {
  return (
    <>
      {siderList.map((v) => {
        return (
          <Link key={v.path} to={v.path}>
            {v.label}
          </Link>
        );
      })}
    </>
  );
};
export default MusicSider;
