import { makeRemoteClients } from 'main/factories/usecases/clients/clients-factory';
import ClientIndex from 'presentation/app/modules/client/pages';
import React from 'react';

export const MakeClients: React.FC = () => {
  return <ClientIndex clients={makeRemoteClients()} />;
};
