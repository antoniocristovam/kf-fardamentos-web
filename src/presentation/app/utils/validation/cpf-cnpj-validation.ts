import { cnpj, cpf } from 'cpf-cnpj-validator';
import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'cpfType', function (errorMessage: string) {
  return this.test('cpfType', errorMessage, function (value) {
    if (!value) {
      return true; // allow empty values if not required
    }

    const { path, createError } = this;

    if (cpf.isValid(value)) {
      return true;
    } else {
      createError({ path, message: errorMessage });
    }
  });
});

Yup.addMethod(Yup.string, 'cnpjType', function (errorMessage: string) {
  return this.test('cnpjType', errorMessage, function (value) {
    const { path, createError } = this;

    if (cnpj.isValid(value)) {
      return true;
    } else {
      return createError({ path, message: errorMessage });
    }
  });
});
