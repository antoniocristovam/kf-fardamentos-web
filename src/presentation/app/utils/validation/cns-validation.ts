import { validaCNS } from 'presentation/app/helpers/cns_validation';
import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'cnsType', function (errorMessage: string) {
  return this.test('cnsType', errorMessage, function (value) {
    if (!value) {
      return true; // allow empty values if not required
    }

    if (validaCNS(value)) {
      return true;
    } else {
      return this.createError({
        path: this.path,
        message: errorMessage,
      });
    }
  });
});
