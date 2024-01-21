const COUNTRY_CALLING_NUMBER = '+55';

export const formatPhone = (phone: string) => {
  return phone.split(COUNTRY_CALLING_NUMBER)[1];
};

export const insertCountryCallingNumber = (phone: string) => {
  return `${COUNTRY_CALLING_NUMBER}${phone}`;
};
