export function checkImplementation<T>(method: T, methodName: string) {
  if (!method) {
    throw new Error(`${methodName} is not implemented.`);
  }
  return true;
}
