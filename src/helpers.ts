export const getUrls = (baseUrl: string, count: number): string[] => {
  return [];
};

export const generateArrayFromTo = (from: number, to: number): number[] => {
  // let res = [];
  // for (from; from <= to; from++) {
  //   res.push(from);
  // }

  // return res;
  return Array(to)
    .fill(1)
    .map((_, i) => from + i);
};
