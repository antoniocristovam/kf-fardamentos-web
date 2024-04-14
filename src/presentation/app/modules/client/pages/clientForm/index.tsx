import { IClients } from 'domain/usecases';
import { useFormik } from 'formik';
import {
  initialValuesClient,
  validationSchemaClient,
  valueToSubmitClient,
} from 'presentation/app/common/validation-schemas/schemas-client';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useClients } from '../../hook/useClients';
import ClientFormView from './view';

// Interface
interface IProps {
  clients: IClients;
}

const ClientFormIndex = ({ clients }: IProps) => {
  // State
  const [currentAddress, setCurrentAddress] = useState(0);

  // Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { requestGetClientsById, clientsById, requestCreateClients } =
    useClients({ clients });

  // Validation
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: initialValuesClient(clientsById),
    validationSchema: validationSchemaClient,

    onSubmit: async (values) => {
      requestCreateClients({
        valueToSubmit: valueToSubmitClient(values),
        userToken: currentUser.token,
      });
    },
  });

  //useEffect
  if (id) {
    useEffect(() => {
      requestGetClientsById({ id: id, userToken: currentUser.token });
    }, []);
  }

  return (
    <ClientFormView
      id={id}
      navigate={navigate}
      validation={validation}
      currentAddress={currentAddress}
      setCurrentAddress={(index: number) => setCurrentAddress(index)}
    />
  );
};

export default ClientFormIndex;
