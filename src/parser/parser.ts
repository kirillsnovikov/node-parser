import { getUrls } from "../helpers";
import { addInQueue } from "../queue";

export const startParser = (from: number, to: number) => {
  for (const url of getUrls(from, to)) {
    addInQueue(url);
  }
};
