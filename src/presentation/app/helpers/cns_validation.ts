const validaCNSDefinitivo = (cns: string) => {
  const pis = cns.substring(0, 11);

  let resultado;

  let soma =
    parseInt(pis.substring(0, 1)) * 15 +
    parseInt(pis.substring(1, 2)) * 14 +
    parseInt(pis.substring(2, 3)) * 13 +
    parseInt(pis.substring(3, 4)) * 12 +
    parseInt(pis.substring(4, 5)) * 11 +
    parseInt(pis.substring(5, 6)) * 10 +
    parseInt(pis.substring(6, 7)) * 9 +
    parseInt(pis.substring(7, 8)) * 8 +
    parseInt(pis.substring(8, 9)) * 7 +
    parseInt(pis.substring(9, 10)) * 6 +
    parseInt(pis.substring(10, 11)) * 5;

  let resto = soma % 11;
  let dv = 11 - resto;

  if (dv === 11) {
    dv = 0;
  }

  if (dv === 10) {
    soma =
      parseInt(pis.substring(0, 1)) * 15 +
      parseInt(pis.substring(1, 2)) * 14 +
      parseInt(pis.substring(2, 3)) * 13 +
      parseInt(pis.substring(3, 4)) * 12 +
      parseInt(pis.substring(4, 5)) * 11 +
      parseInt(pis.substring(5, 6)) * 10 +
      parseInt(pis.substring(6, 7)) * 9 +
      parseInt(pis.substring(7, 8)) * 8 +
      parseInt(pis.substring(8, 9)) * 7 +
      parseInt(pis.substring(9, 10)) * 6 +
      parseInt(pis.substring(10, 11)) * 5 +
      2;

    resto = soma % 11;
    dv = 11 - resto;
    resultado = pis + '001' + dv;
  } else {
    resultado = pis + '000' + dv;
  }

  if (cns !== resultado) {
    return false;
    // return { error: 'Número de CNS Inválido', message: '' };
  } else {
    return true;
    return { error: '', message: '' }; // "Número de CNS Válido";
  }
};

const validaCNS = (cns: string) => {
  const tamCNS = cns.length;

  if (tamCNS !== 15) {
    return false;
    // return { error: 'Número de CNS Incorreto', message: '' };
  }

  const pis = cns.substring(0, 15);

  if (
    cns.substring(0, 1) !== '7' &&
    cns.substring(0, 1) !== '8' &&
    cns.substring(0, 1) !== '9'
  ) {
    return validaCNSDefinitivo(cns);
  }

  const soma =
    parseInt(pis.substring(0, 1), 10) * 15 +
    parseInt(pis.substring(1, 2), 10) * 14 +
    parseInt(pis.substring(2, 3), 10) * 13 +
    parseInt(pis.substring(3, 4), 10) * 12 +
    parseInt(pis.substring(4, 5), 10) * 11 +
    parseInt(pis.substring(5, 6), 10) * 10 +
    parseInt(pis.substring(6, 7), 10) * 9 +
    parseInt(pis.substring(7, 8), 10) * 8 +
    parseInt(pis.substring(8, 9), 10) * 7 +
    parseInt(pis.substring(9, 10), 10) * 6 +
    parseInt(pis.substring(10, 11), 10) * 5 +
    parseInt(pis.substring(11, 12), 10) * 4 +
    parseInt(pis.substring(12, 13), 10) * 3 +
    parseInt(pis.substring(13, 14), 10) * 2 +
    parseInt(pis.substring(14, 15), 10) * 1;

  const resto = soma % 11;

  if (resto === 0) {
    return true;
    // return { error: '', message: '' }; // "Número de CNS Provisório Válido";
  } else {
    return validaCNSDefinitivo(cns);
  }
};

export { validaCNS };
