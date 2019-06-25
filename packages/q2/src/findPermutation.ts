import { equals, find } from 'ramda';

const swap = (arr: number[], idxA, idxB): void => {
  const tmp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = tmp;
};

const heapRecur = (arr: number[], length: number, result: number[][]): void => {
  if (length === 1) {
    if (!find(equals(arr))(result)) result.push([...arr]);

    return;
  }

  for (let i = 0; i < length; i++) {
    heapRecur(arr, length - 1, result);

    if (length % 2 == 0) {
      swap(arr, i, length - 1);
    } else {
      swap(arr, 0, length - 1);
    }
  }
};

export default (combination: number[]): number[][] => {
  const result: number[][] = [];
  heapRecur(combination, combination.length, result);

  return result;
};
