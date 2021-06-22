import { BASE_URL } from "./constants";

export const getUrls = (from: number, to: number): string[] => {
  let res = [];
  for (let id of generateArrayFromTo(from, to)) {
    res.push(`${BASE_URL}${id}`);
  }
  return res;
};

export const generateArrayFromTo = (from: number, to: number): number[] => {
  const length = from <= to ? to - from + 1 : 0;
  return Array(length)
    .fill(1)
    .map((_, i) => from + i);
};
