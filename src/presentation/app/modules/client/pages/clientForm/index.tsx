import { IClients } from 'domain/usecases';
import { useFormik } from 'formik';
import { useAuth } from 'presentation/app/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { useClients } from '../../hook/useClients';
import ClientFormView from './view';

// Yup & Formik

interface IProps {
  clients: IClients;
}

const ClientFormIndex = ({ clients }: IProps) => {
  // Hook
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { requestGetClientsById, clientsById } = useClients({ clients });

  // State
  const [currentAddress, setCurrentAddress] = useState(0);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: clientsById ? clientsById.name : '',
      email: clientsById ? clientsById.email : '',
      cpf_cnpj: clientsById ? clientsById.cpf_cnpj : '',
      thirdPhoneNumber: clientsById ? clientsById.thirdPhoneNumber : '',
      firstPhoneNumber: clientsById ? clientsById.firstPhoneNumber : '',
      secondPhoneNumber: clientsById ? clientsById.secondPhoneNumber : '',
      addresses: [
        {
          city: '',
          state: '',
          street: '',
          number: '',
          postalCode: '',
          neighborhood: '',
          aditionalInformation: '',
        },
      ],
    },
    validationSchema: Yup.object({
      cpf_cnpj: Yup.string().required('Obrigatório!'),
      name: Yup.string().required('Obrigatório!'),
      email: Yup.string().email('Email inválido!').required('Obrigatório!'),
      firstPhoneNumber: Yup.string().required('Obrigatório!'),
      secondPhoneNumber: Yup.string(),
      thirdPhoneNumber: Yup.string(),
      addresses: Yup.array().of(
        Yup.object().shape({
          city: Yup.string(),
          state: Yup.string(),
          street: Yup.string(),
          number: Yup.string(),
          postalCode: Yup.string(),
          neighborhood: Yup.string(),
          aditionalInformation: Yup.string(),
        }),
      ),
    }),

    onSubmit: async (values) => {
      const valueToSubmit = {
        name: values.name,
        email: values.email,
        cpf_cnpj: values.cpf_cnpj,
        addresses: values.addresses,
        firstPhoneNumber: values.firstPhoneNumber,
        thirdPhoneNumber: values.thirdPhoneNumber,
        secondPhoneNumber: values.secondPhoneNumber,
      };
      console.log(valueToSubmit);
    },
  });

  console.log(validation.errors, validation.values);

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
