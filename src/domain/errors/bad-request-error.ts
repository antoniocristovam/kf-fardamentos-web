export class BadRequestError extends Error {
  constructor(message?: string) {
    super(message || 'Ocorreu um erro');
    this.name = 'BadRequestError';
  }
}
