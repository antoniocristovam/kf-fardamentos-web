import { makeRemoteClients } from 'main/factories/usecases/clients/clients-factory';
import ClientListIndex from 'presentation/app/modules/client/pages/clientList';
import React from 'react';

export const MakeClients: React.FC = () => {
  return <ClientListIndex clients={makeRemoteClients()} />;
};
