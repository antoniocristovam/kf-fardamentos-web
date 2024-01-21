export type AuthenticationModel = {
  token: string;
  refreshToken: string;
  user: {
    cpf: string;
    name: string;
    role: string;
    email: string;
    isActive: true;
    createdAt: string;
    phoneNumber: string;
  };
};
