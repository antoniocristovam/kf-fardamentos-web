import { ClientsByIdModel, ClientsCreateModel } from 'domain/models';
import * as Yup from 'yup';

export const initialValuesClient = (clientsById: ClientsByIdModel) => ({
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
});

export const validationSchemaClient = Yup.object({
  thirdPhoneNumber: Yup.string(),
  secondPhoneNumber: Yup.string(),

  name: Yup.string().required('Nome é obrigatório!'),
  firstPhoneNumber: Yup.string().required('Obrigatório!'),
  cpf_cnpj: Yup.string().required('CPF ou CNPJ é obrigatório!'),
  email: Yup.string().email('Email inválido!').required('Email é obrigatório!'),

  // Addresses
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
});

export const valueToSubmitClient = (values: ClientsCreateModel) => ({
  name: values.name,
  email: values.email,
  cpf_cnpj: values.cpf_cnpj,
  firstPhoneNumber: values.firstPhoneNumber,
  thirdPhoneNumber: values.thirdPhoneNumber,
  secondPhoneNumber: values.secondPhoneNumber,

  //   TODO: Fix this
  addresses: [
    {
      state: 'PE',
      number: '12',
      postalCode: '55690-000',
      street: 'rua de teste',
      neighborhood: 'nova casa',
      city: 'Barra de Guabiraba',
      aditionalInformation: 'teste',
    },
  ],
});
