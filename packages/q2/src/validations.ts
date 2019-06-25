export const isInteger = (str: string): boolean | string => {
  const numb = parseInt(str);

  if (!numb || isNaN(numb)) return 'Must be an integer number!';

  return true;
};
