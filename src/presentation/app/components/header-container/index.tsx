import React from 'react';
import './index.scss';

interface IProps {
  name: string;
}

const HeaderContainer = ({ name }: IProps) => {
  return (
    <div className="data-head mb-3">
      <h6 className="overline-title m-0 p-0">{name}</h6>
    </div>
  );
};

export default HeaderContainer;
