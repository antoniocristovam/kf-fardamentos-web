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
  // State
  const [currentAddress, setCurrentAddress] = useState(0);

  // Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { requestGetClientsById, clientsById, requestCreateClients } =
    useClients({ clients });

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
        // name: values.name,
        // email: values.email,
        // cpf_cnpj: values.cpf_cnpj,
        // firstPhoneNumber: values.firstPhoneNumber,
        // thirdPhoneNumber: values.thirdPhoneNumber,
        // secondPhoneNumber: values.secondPhoneNumber,
        // addresses: [
        //   {
        //     id: '',
        //     city: '',
        //     state: '',
        //     number: '',
        //     parish: '',
        //     street: '',
        //     clientId: '',
        //     community: '',
        //     postalCode: '',
        //     neighborhood: '',
        //     aditionalInformation: '',
        //   },
        // ],

        name: 'yrsry',
        email: '34252345@gmail.com',
        cpf_cnpj: '811.829.290-87',
        firstPhoneNumber: '(81) 98222-4436',
        thirdPhoneNumber: '',
        secondPhoneNumber: '',
        addresses: [
          {
            postalCode: '55690-000',
            street: 'rua de terste',
            state: 'PE',
            city: 'Barra de Guabiraba',
            neighborhood: 'nova casa',
            number: '12',
            aditionalInformation: 'teste',
          },
        ],
      };
      // console.log(valueToSubmit);
      requestCreateClients({
        valueToSubmit: valueToSubmit,
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
