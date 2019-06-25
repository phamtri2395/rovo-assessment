import findCombination from './findCombination';
import findPermutation from './findPermutation';
import printResult from './printResult';

// 1 and 2 hours long sessions
const SESSIONS = [1, 2];

export default (answer: { totalHours: string }): void => {
  const totalHours: number = parseInt(answer.totalHours);

  const combinations: number[][] = findCombination(SESSIONS)(totalHours);
  const permutation: number[][] = [];

  for (const comb of combinations) {
    permutation.push(...findPermutation(comb));
  }

  printResult(permutation);
};
