// React
import { FormikValues, useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Domain
import * as Yup from 'yup';

// eslint-disable-next-line import-helpers/order-imports
import { IAuthentication } from '../../../../../../domain/usecases';

// Infra
import { SessionStorageAdapter } from '../../../../../../infra/cache';

// Hooks
import { useAppSelector } from '../../../../../config/hooks/useRedux';
import { useAuth } from '../../../../hooks/useAuth';

// Yup & Formik

// View
import { LoginView } from './view';

// Utils
import '../../../../utils/validation/cpf-cnpj-validation';

interface IAuth {
  authentication: IAuthentication;
  session: SessionStorageAdapter;
}

export const Login = ({ authentication, session }: IAuth) => {
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const navigate = useNavigate();
  const { saveAuth, setCurrentUser } = useAuth();

  const validation: FormikValues = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      cpf: '536.207.760-08' || '',
      password: 'Te@123' || '',
    },
    validationSchema: Yup.object({
      cpf: Yup.string().required('Por favor, insira seu CPF'),
      password: Yup.string().required('Por favor, insira sua senha'),
    }),
    onSubmit: async (values) => {
      setLoader(true);
      try {
        const response = await authentication.auth(values);
        console.log(response);
        saveAuth(response);
        setCurrentUser(response);
        session.set('authUser', response);
        navigate('/dashboard');
      } catch (error) {
        setLoader(false);
        saveAuth(undefined);
        setError(true);
      }
    },
  });

  // document.title = `${entidade?.titulo_pagina || ''} Login`;

  return (
    <LoginView
      error={error}
      loader={loader}
      validation={validation}
      passwordShow={passwordShow}
      setPasswordShow={setPasswordShow}
    />
  );
};
