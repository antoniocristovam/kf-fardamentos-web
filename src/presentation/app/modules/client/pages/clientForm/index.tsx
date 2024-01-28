import React from 'react';
import ClientFormView from './view';
import { useNavigate } from 'react-router-dom';

const ClientFormIndex = () => {
  const navigate = useNavigate();
  return (
    <>
      <ClientFormView navigate={navigate} />
    </>
  );
};

export default ClientFormIndex;
