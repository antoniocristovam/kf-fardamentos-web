import React from 'react';
import { Button } from 'reactstrap';

interface IProps {
  icon?: string;
  title?: string;
  handleButton?: () => void;
}

export const FloatButton = ({ icon, title, handleButton }: IProps) => {
  return (
    <Button
      onClick={() => handleButton()}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        bottom: '70px',
        right: '30px',
        zIndex: '9999',
        height: '50px',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <i
          className={icon ? icon : 'ri-add-fill'}
          style={{
            fontSize: '20px',
          }}
        ></i>
        {title && (
          <span
            style={{
              marginLeft: '10px',
            }}
          >
            {title}
          </span>
        )}
      </div>
    </Button>
  );
};
