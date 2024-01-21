/**
 * Create functions as needed to format API data and generate options for selects.
 */

type IPropsData = [
  {
    id: string;
    nome: string;
  },
];

export const generateOptions = (data: IPropsData) => {
  if (data) {
    let options = data.map((item) => {
      return {
        value: item.id,
        label: item.nome,
      };
    });
    return options;
  }
};
