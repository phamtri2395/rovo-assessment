export default (result: number[][]): void => {
  console.info('Result:\n');

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].join('-'));
  }
};
