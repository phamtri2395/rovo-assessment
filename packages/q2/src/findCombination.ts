export default (sessions: number[]): Function => (
  hours: number
): number[][] => {
  let numberOf2Need = 0;
  const result: number[][] = [];

  while (numberOf2Need * 2 <= hours) {
    result.push([
      ...Array(numberOf2Need).fill(sessions[1]),
      ...Array(hours - numberOf2Need * 2).fill(sessions[0]),
    ]);

    numberOf2Need++;
  }

  return result;
};
