import { StringSchema } from 'yup';

declare module 'yup' {
  interface StringSchema<
    T extends string | null | undefined = string | undefined,
    C = Record<string, any>,
    O = T,
    I = string,
  > {
    cpfType(errorMessage: string): StringSchema<T, C, O, I>;
    cnpjType(errorMessage: string): StringSchema<T, C, O, I>;
  }
}

declare module 'yup' {
  interface StringSchema {
    cnsType(errorMessage: string): StringSchema;
  }
}
