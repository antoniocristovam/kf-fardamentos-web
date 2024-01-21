export const removeCpfMask = (cpf: string): string => {
  return cpf && cpf.replace(/\D/g, '');
};

export const addCpfMask = (cpf: string): string => {
  return cpf && cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};
