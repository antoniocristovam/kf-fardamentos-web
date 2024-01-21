export function convertEventSelectToTarget({ name, value }) {
  return {
    target: {
      name,
      value,
    },
  };
}
